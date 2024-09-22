import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { User, UserSchema } from '@/module/user/repository/user.schema'

import { FavController } from './fav.controller'
import { FavRepository } from './fav.repository'
import { FavProvider } from './provider'

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  providers: [FavProvider, FavRepository],
  controllers: [FavController]
})
export class FavModule {}
