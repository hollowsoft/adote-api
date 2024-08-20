import { Injectable } from '@nestjs/common'

import { SendMailProvider } from './send.mail.provider'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class MailProvider {
  readonly send: SendMailProvider = new SendMailProvider(this.configuration)

  constructor(private readonly configuration: ConfigService) {}
}
