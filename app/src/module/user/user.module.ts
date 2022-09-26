import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { User } from './entity/user.entity'
import { UserRepository } from './user.repository'

import { UserService } from './user.service'
import { GetUserCase } from './case/get.user.case'

import { UserController } from './user.controller'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports: [UserRepository],
  providers: [
    UserService,
    UserRepository,
    GetUserCase
  ],
  controllers: [UserController]
})
export class UserModule {}
