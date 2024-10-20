import { MailerService } from '@nestjs-modules/mailer'

import { Template } from '../type/template.enum'

export class SendMailProvider {
  constructor(private readonly mailer: MailerService) {}

  async run(
    to: string,
    subject: string,
    template: Template,
    context: { [key: string]: string }
  ): Promise<void> {
    await this.mailer.sendMail({
      to,
      subject,
      template,
      context
    })
  }
}
