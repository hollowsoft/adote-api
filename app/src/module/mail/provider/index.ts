import { Injectable } from '@nestjs/common'

import { SendMail } from './send.mail'

export enum Action {
  Send
}

export { SendMail }

@Injectable()
export class MailProvider {
  action: [SendMail]

  constructor(private readonly send: SendMail) {
    this.action = [this.send]
  }
}
