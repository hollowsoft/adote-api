import { Injectable, InternalServerErrorException } from '@nestjs/common'

import { User, UserDocument } from '@/module/user/user.type'
import { UserRepository } from '@/module/user/user.repository'

import { AuthRequest } from '../auth.request'
import { AuthResponse } from '../auth.response'
import { SendMailProvider } from '@/module/mail/provider/send.mail.provider'

@Injectable()
export class MailAuthProvider {
  constructor(
    private readonly repository: UserRepository,
    private readonly sendMailProvider: SendMailProvider
  ) {}

  async run(request: AuthRequest): Promise<AuthResponse> {
    const { mail } = request

    try {
      const user = await this.get(mail)

      const code = ''

      this.sendMailProvider.run(`This is your authentication code: ${code}`, 'Your verification code', mail)

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
