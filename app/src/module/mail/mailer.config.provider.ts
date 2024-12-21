import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { SESClient } from '@aws-sdk/client-ses'
import { MailerOptions, MailerOptionsFactory } from '@nestjs-modules/mailer'

@Injectable()
export class MailerConfigProvider implements MailerOptionsFactory {
  constructor(private readonly config: ConfigService) {}

  createMailerOptions(): MailerOptions {
    return {
      defaults: {
        from: `"${this.config.get<string>('MAILER_NAME')}" <${this.config.get<string>('MAILER_SENDER')}>`
      },
      template: {
        dir: './template',
        adapter: {} as any,
        options: {
          strict: true
        }
      },
      transport: {
        ses: new SESClient({
          region: this.config.get<string>('AMAZON_REGION')
        })
      }
    }
  }
}
