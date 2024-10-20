import { Module } from '@nestjs/common'

import { MailerModule } from '@nestjs-modules/mailer'

import { MailerConfigProvider } from './mailer.config.provider'
import { MailProvider } from './provider/index'
import { SendMailProvider } from './provider/send.mail.provider'

@Module({
  imports: [
    MailerModule.forRootAsync({
      useClass: MailerConfigProvider
    })
  ],
  exports: [SendMailProvider],
  providers: [MailProvider]
})
export class MailModule {}
