import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { UserSchema } from '@/module/user/user.type'

import { FavProvider } from './provider'
import { FavRepository } from './fav.repository'

import { FavController } from './fav.controller'

@Module({
  imports: [MongooseModule.forFeature([UserSchema])],
  providers: [FavProvider, FavRepository],
  controllers: [FavController]
})
export class FavModule {}
