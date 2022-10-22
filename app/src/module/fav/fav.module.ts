import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { PostModule } from '../post/post.module'

import { Fav } from './entity/fav.entity'
import { FavRepository } from './fav.repository'

import { FavService } from './service/fav.service'
import { AddFavService } from './service/add.fav.service'
import { ListFavService } from './service/list.fav.service'
import { RemoveFavService } from './service/remove.fav.service'

import { FavController } from './fav.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Fav]), PostModule],
  providers: [
    FavRepository,
    FavService,
    AddFavService,
    ListFavService,
    RemoveFavService
  ],
  controllers: [FavController]
})
export class FavModule {}
