import { isNil } from 'lodash'

import { MailProvider } from '@/module/mail/provider'
import { Template } from '@/module/mail/type/template.enum'
import { CreateUser } from '@/module/user/repository/user.model'
import { UserRepository } from '@/module/user/repository/user.repository'
import { UserDocument } from '@/module/user/repository/user.schema'

import { AuthRequest } from '../auth.request'
import { AuthResponse } from '../auth.response'

export class MailAuthProvider {
  constructor(
    private readonly provider: MailProvider,
    private readonly repository: UserRepository
  ) {}

  async run(request: AuthRequest): Promise<AuthResponse> {
    const { mail } = request

    const user = await this.save(mail)

    this.provider.send.run(mail, '', Template.CODE, {})

    return new AuthResponse(user)
  }

  private async save(mail: string): Promise<UserDocument> {
    const user = await this.repository.find({ mail })

    if (isNil(user)) {
      return this.repository.create(new CreateUser(mail))
    }

    return user
  }
}
