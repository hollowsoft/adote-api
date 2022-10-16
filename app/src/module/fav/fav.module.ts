import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Fav } from './entity/fav.entity'
import { FavRepository } from './fav.repository'

import { FavService } from './service/fav.service'
import { AddFavService } from './service/add.fav.service'
import { ListFavService } from './service/list.fav.service'
import { RemoveFavService } from './service/remove.fav.service'

@Module({
  imports: [TypeOrmModule.forFeature([Fav])],
  providers: [
    FavRepository,
    FavService,
    AddFavService,
    ListFavService,
    RemoveFavService
  ]
})
export class FavModule {}
