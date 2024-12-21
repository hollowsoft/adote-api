import { Module } from '@nestjs/common'

import { MailerModule } from '@nestjs-modules/mailer'

import { MailerConfigProvider } from './mailer.config.provider'
import { MailProvider } from './provider'

@Module({
  imports: [
    MailerModule.forRootAsync({
      useClass: MailerConfigProvider
    })
  ],
  exports: [MailProvider],
  providers: [MailProvider]
})
export class MailModule {}
