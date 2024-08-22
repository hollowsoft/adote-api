import { Injectable, BadRequestException, Inject } from '@nestjs/common'

import * as crypto from 'crypto'

import { Role, User } from '@/module/user/user.type'
import { UserRepository } from '@/module/user/user.repository'

import { AuthRequest } from '../auth.request'
import { AuthResponse } from '../auth.response'

import { isNil } from 'lodash'
import { Document } from 'mongoose'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Cache } from 'cache-manager'
import { Post } from '@/module/post/post.type'
import { MailProvider } from '@/module/mail/provider'

@Injectable()
export class MailAuthProvider {
  constructor(
    private readonly repository: UserRepository,
    private readonly mailProvider: MailProvider,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  async run(request: AuthRequest): Promise<AuthResponse> {
    const user = (await this.save(request)) as User & Document

    if (isNil(user)) {
      throw new BadRequestException('Unable to create user')
    }

    const token = String(crypto.randomInt(3)).padStart(6, '0')

    await this.cacheManager.set(`${user.mail}`, '123456')

    await this.mailProvider.send.run(
      user.mail,
      'Your authentication code',
      `Your authentication code is: ${token}`
    )

    return {
      id: user._id,
      mail: user.mail
    }
  }

  private async save({ mail }: AuthRequest): Promise<User> {
    const user = await this.repository.find({ mail: mail })

    if (user) {
      return user
    }

    return await this.repository.save({
      mail: mail,
      fav: [] as Post[],
      post: [] as Post[],
      role: Role.Member,
      enable: true
    })
  }
}
