import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class SendMailProvider {
  constructor(private readonly configuration: ConfigService) {}

  async run(to: string, subject: string, text: string): Promise<void> {
    try {
      // User SES SDK later
      console.log(
        `Sending email to ${to} from: ${this.configuration.get<string>(
          'EMAIL_USER'
        )}.... Subject: ${subject}; Text: ${text}`
      )
    } catch (error) {
      throw new InternalServerErrorException(`Failed to send email. Error: ${error}`)
    }
  }
}
