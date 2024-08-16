import { Injectable, BadRequestException, Inject } from '@nestjs/common'

import * as crypto from 'crypto'

import { User } from '@/module/user/user.type'
import { UserRepository } from '@/module/user/user.repository'

import { AuthRequest } from '../auth.request'
import { AuthResponse } from '../auth.response'

import { isNil } from 'lodash'
import { Document } from 'mongoose'
import { MailService } from '../mail.service'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Cache } from 'cache-manager'

@Injectable()
export class MailAuthProvider {
  constructor(
    private readonly repository: UserRepository,
    private readonly mailService: MailService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  async run(request: AuthRequest): Promise<AuthResponse> {
    const user = (await this.save(request)) as User & Document

    if (isNil(user)) {
      throw new BadRequestException('')
    }

    const token = crypto.randomBytes(3).toString('hex')

    await this.cacheManager.set('token', token)

    await this.mailService.sendMail(
      user.mail,
      'Your authentication code',
      `Your authentication code is: ${token}`
    )

    return {
      id: user._id,
      mail: user.mail
    }
  }

  private async save(request: AuthRequest): Promise<User> {
    const { mail } = request

    const user = await this.repository.find({ mail: mail })

    if (user) {
      return user
    }

    return this.repository.save(request)
  }
}
