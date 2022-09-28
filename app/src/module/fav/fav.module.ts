import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Fav } from './entity/fav.entity'
import { FavRepository } from './fav.repository'

import { FavService } from './fav.service'
import { ListFavCase } from './case/list.fav.case'
import { AddFavCase } from './case/add.fav.case'
import { RemoveFavCase } from './case/remove.fav.case'

@Module({
  imports: [TypeOrmModule.forFeature([Fav])],
  providers: [
    FavService,
    ListFavCase,
    AddFavCase,
    RemoveFavCase
  ]
})
export class FavModule {}
