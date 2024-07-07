import { Injectable } from '@nestjs/common'

import { SendMail } from './send.mail'

@Injectable()
export class MailProvider {
  readonly send: SendMail = new SendMail()

  constructor() {}
}
