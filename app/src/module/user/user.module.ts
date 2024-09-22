import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { UserProvider } from './provider'
import { UserRepository } from './repository/user.repository'
import { User, UserSchema } from './repository/user.schema'
import { UserController } from './user.controller'

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  exports: [UserRepository],
  providers: [UserProvider, UserRepository],
  controllers: [UserController]
})
export class UserModule {}
