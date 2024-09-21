import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { UserProvider } from './provider'
import { UserController } from './user.controller'
import { UserRepository } from './user.repository'
import { UserSchema } from './user.type'

@Module({
  imports: [MongooseModule.forFeature([UserSchema])],
  exports: [UserRepository],
  providers: [UserProvider, UserRepository],
  controllers: [UserController]
})
export class UserModule {}
