import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as nodemailer from 'nodemailer'

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter

  constructor(private readonly configuration: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // example for Gmail
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: this.configuration.get<string>('EMAIL_USER'),
        pass: this.configuration.get<string>('EMAIL_PASS')
      }
    })
  }

  async sendMail(to: string, subject: string, text: string): Promise<void> {
    try {
      await this.transporter.sendMail({
        from: this.configuration.get<string>('EMAIL_USER'),
        to: to,
        subject: subject,
        text: text
      })
    } catch (error) {
      throw new InternalServerErrorException('Failed to send email')
    }
  }
}
