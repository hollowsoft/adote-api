import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { User } from './user.entity'
import { UserRepository } from './user.repository'

import { UserProvider } from './user.provider'

import { UserController } from './user.controller'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports: [UserRepository],
  providers: [UserProvider, UserRepository],
  controllers: [UserController]
})
export class UserModule {}
