import { Inject, Injectable } from '@nestjs/common'

import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'

import { MailAuthProvider } from './mail.auth.provider'
import { RenewAuthProvider } from './renew.auth.provider'
import { VerifyAuthProvider } from './verify.auth.provider'

import { UserRepository } from '@/module/user/user.repository'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Cache } from 'cache-manager'
import { MailProvider } from '@/module/mail/provider'

@Injectable()
export class AuthProvider {
  readonly mail: MailAuthProvider = new MailAuthProvider(this.repository, this.mailService, this.cacheManager)
  readonly renew: RenewAuthProvider = new RenewAuthProvider(this.jwt, this.configuration)
  readonly verify: VerifyAuthProvider = new VerifyAuthProvider(
    this.jwt,
    this.configuration,
    this.repository,
    this.cacheManager
  )

  constructor(
    private readonly jwt: JwtService,
    private readonly configuration: ConfigService,
    private readonly repository: UserRepository,
    private readonly mailService: MailProvider,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}
}
