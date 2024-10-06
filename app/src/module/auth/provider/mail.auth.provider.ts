import { isNil } from 'lodash'

import { SendMailProvider } from '@/module/mail/provider/send.mail.provider'
import { CreateUser } from '@/module/user/repository/user.model'
import { UserRepository } from '@/module/user/repository/user.repository'
import { UserDocument } from '@/module/user/repository/user.schema'

import { AuthRequest } from '../auth.request'
import { AuthResponse } from '../auth.response'

export class MailAuthProvider {
  constructor(
    private readonly send: SendMailProvider,
    private readonly repository: UserRepository
  ) {}

  async run(request: AuthRequest): Promise<AuthResponse> {
    const { mail } = request

    const user = await this.save(mail)

    this.send.run(mail, '')

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
