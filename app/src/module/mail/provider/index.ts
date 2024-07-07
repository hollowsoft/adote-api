import { Injectable } from '@nestjs/common'

import { SendMailProvider } from './send.mail.provider'

@Injectable()
export class MailProvider {
  readonly send: SendMailProvider = new SendMailProvider()

  constructor() {}
}
