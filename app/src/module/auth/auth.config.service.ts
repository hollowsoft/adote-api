import { Injectable } from '@nestjs/common'

import { ConfigService } from '@nestjs/config'

import {
  JwtModuleOptions,
  JwtOptionsFactory
} from '@nestjs/jwt'

@Injectable()
export class AuthConfigService implements JwtOptionsFactory {
  constructor(private readonly service: ConfigService) {}

  createJwtOptions(): JwtModuleOptions {
    return {
      secret: this.service.get<string>('SECRET'),
      signOptions: {
        expiresIn: this.service.get<number>('EXPIRE')
      }
    }
  }
}
