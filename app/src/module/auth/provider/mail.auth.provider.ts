import { InternalServerErrorException } from '@nestjs/common'

import { SendMailProvider } from '@/module/mail/provider/send.mail.provider'
import { UserRepository } from '@/module/user/user.repository'
import { User, UserDocument } from '@/module/user/user.type'

import { AuthRequest } from '../auth.request'
import { AuthResponse } from '../auth.response'

export class MailAuthProvider {
  constructor(
    private readonly send: SendMailProvider,
    private readonly repository: UserRepository
  ) {}

  async run(request: AuthRequest): Promise<AuthResponse> {
    const { mail } = request

    try {
      const user = await this.get(mail)

      this.send.run('', '', '')

      return new AuthResponse(user)
    } catch (e) {
      throw new InternalServerErrorException()
    }
  }

  private async get(mail: string): Promise<UserDocument> {
    const user = await this.repository.find({ mail })

    if (user) {
      return user
    }

    return this.repository.save(<User>{ mail })
  }
}
