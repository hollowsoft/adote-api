import { Module } from '@nestjs/common'

import { UserModule } from '../user/user.module'

import { AuthService } from './auth.service'
import { AuthMailCase } from './case/auth.mail.case'

import { AuthController } from './auth.controller'

@Module({
  imports: [UserModule],
  providers: [
    AuthService,
    AuthMailCase
  ],
  controllers: [AuthController],
})
export class AuthModule {}
