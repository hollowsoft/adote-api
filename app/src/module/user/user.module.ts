import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { User } from './entity/user.entity'
import { UserRepository } from './user.repository'

import { UserService } from './service/user.service'
import { GetUserService } from './service/get.user.service'
import { GetCurrentService } from './service/get.current.service'
import { ListUserService } from './service/list.user.service'
import { ImageUserService } from './service/image.user.service'

import { UserController } from './user.controller'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports: [UserRepository],
  providers: [
    UserRepository,
    UserService,
    GetUserService,
    GetCurrentService,
    ListUserService,
    ImageUserService
  ],
  controllers: [UserController]
})
export class UserModule {}
