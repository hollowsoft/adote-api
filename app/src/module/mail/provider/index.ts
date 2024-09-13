import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { SendMailProvider } from './send.mail.provider'

@Injectable()
export class MailProvider {
  readonly send: SendMailProvider = new SendMailProvider(this.config)

  constructor(private readonly config: ConfigService) {}
}
