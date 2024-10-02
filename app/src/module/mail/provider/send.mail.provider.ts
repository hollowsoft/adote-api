import { Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { SendEmailCommand, SESClient } from '@aws-sdk/client-ses'

export class SendMailProvider {
  private readonly logger = new Logger(SendMailProvider.name)

  private readonly client = new SESClient()

  constructor(private readonly config: ConfigService) {}

  async run(to: string, subject: string): Promise<void> {
    try {
      const param = {
        Source: this.config.get<string>(''),
        Destination: {
          ToAddresses: [to]
        },
        Message: {
          Subject: {
            Data: subject
          },
          Body: {
            Html: {
              Data: ''
            }
          }
        }
      }

      await this.client.send(new SendEmailCommand(param))
    } catch (e) {
      this.logger.error(e)
    }
  }
}
