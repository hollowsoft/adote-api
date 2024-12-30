import { isNil } from 'lodash'

import { MailProvider } from '@/module/mail/provider'
import { Template } from '@/module/mail/type/template.enum'
import { UserRepository } from '@/module/user/repository/user.repository'
import type { UserDocument } from '@/module/user/repository/user.schema'

import { AuthResponse } from '../auth.response'

export class MailAuthProvider {
  constructor(
    private readonly provider: MailProvider,
    private readonly repository: UserRepository
  ) {}

  async run(mail: string): Promise<AuthResponse> {
    const user = await this.save(mail)

    // TODO: send mail with code
    //this.provider.send.run(mail, '', Template.CODE, {})

    return new AuthResponse(user)
  }

  private async save(mail: string): Promise<UserDocument> {
    const user = await this.repository.find({ mail })

    if (isNil(user)) {
      const create = {
        mail,
        contact: {
          mail
        }
      }

      return await this.repository.create(create)
    }

    return user
  }
}
