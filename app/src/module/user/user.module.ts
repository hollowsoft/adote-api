import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { UserSchema } from './user.type'
import { UserRepository } from './user.repository'

import { UserProvider } from './provider'

import { UserController } from './user.controller'

@Module({
  exports: [UserRepository],
  imports: [MongooseModule.forFeature([UserSchema])],
  providers: [UserProvider, UserRepository],
  controllers: [UserController]
})
export class UserModule {}
