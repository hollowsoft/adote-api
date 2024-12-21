import { Injectable } from '@nestjs/common'

import { MailerService } from '@nestjs-modules/mailer'

import { SendMailProvider } from './send.mail.provider'

@Injectable()
export class MailProvider {
  readonly send: SendMailProvider

  constructor(private readonly mailer: MailerService) {
    this.send = new SendMailProvider(this.mailer)
  }
}
