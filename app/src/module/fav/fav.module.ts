import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { UserSchema } from '@/module/user/user.type'

import { AddFav, ListFav, RemoveFav, FavProvider } from './provider'

import { FavController } from './fav.controller'

@Module({
  imports: [MongooseModule.forFeature([UserSchema])],
  providers: [AddFav, ListFav, RemoveFav, FavProvider],
  controllers: [FavController]
})
export class FavModule {}
