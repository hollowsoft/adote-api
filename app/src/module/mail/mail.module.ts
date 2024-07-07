import { Module } from '@nestjs/common'

import { MailProvider } from './provider'

@Module({
  providers: [MailProvider]
})
export class MailModule {}
