import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { UserSchema } from '@/module/user/user.type'

import { FavController } from './fav.controller'
import { FavRepository } from './fav.repository'
import { FavProvider } from './provider'

@Module({
  imports: [MongooseModule.forFeature([UserSchema])],
  providers: [FavProvider, FavRepository],
  controllers: [FavController]
})
export class FavModule {}
