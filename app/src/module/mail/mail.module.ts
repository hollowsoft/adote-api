import { Module } from '@nestjs/common'

import { SendMail, MailProvider } from './provider'

@Module({
  providers: [SendMail, MailProvider]
})
export class MailModule {}
