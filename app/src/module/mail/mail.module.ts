import { Module } from '@nestjs/common'

import { MailProvider } from './provider'
import { SendMailProvider } from './provider/send.mail.provider'

@Module({
  exports: [SendMailProvider],
  providers: [MailProvider, SendMailProvider]
})
export class MailModule {}
