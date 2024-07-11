import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { UserSchema } from './user.type'
import { UserRepository } from './user.repository'

import { UserProvider } from './provider'
import { UserController } from './user.controller'

@Module({
  imports: [MongooseModule.forFeature([UserSchema])],
  exports: [UserRepository],
  providers: [UserProvider, UserRepository],
  controllers: [UserController]
})
export class UserModule {}
