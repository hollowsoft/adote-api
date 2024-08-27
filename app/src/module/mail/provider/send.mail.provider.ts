import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import AWS from 'aws-sdk'

@Injectable()
export class SendMailProvider {
  constructor(private readonly config: ConfigService) {}

  async run(body: string, subject: string, to: string) {
    const sender = this.config.get<string>('SENDER_EMAIL')
    const secretKey = this.config.get<string>('SECRET_ACCESS_KEY')
    const accessKey = this.config.get<string>('ACCESS_KEY_ID')
    const awsRegion = this.config.get<string>('AWS_REGION')

    AWS.config.update({
      region: awsRegion,
      credentials: {
        secretAccessKey: secretKey,
        accessKeyId: accessKey
      }
    })

    var params = {
      Destination: {
        CcAddresses: [to],
        ToAddresses: [to]
      },
      Message: {
        Body: {
          // Html: {
          //   Charset: 'UTF-8',
          //   Data: body
          // },
          Text: {
            Charset: 'UTF-8',
            Data: body
          }
        },
        Subject: {
          Charset: 'UTF-8',
          Data: subject
        }
      },
      Source: sender
    }

    const sendPromise = new AWS.SES({ apiVersion: '2010-12-01' }).sendEmail(params).promise()

    sendPromise
      .then(function (data) {
        console.log(data.MessageId)
      })
      .catch(function (err) {
        console.error(err, err.stack)
      })
  }
}
