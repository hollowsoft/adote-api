import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Fav } from './fav.entity'
import { FavRepository } from './fav.repository'

import { FavProvider, AddFav, ListFav, RemoveFav } from './provider'

import { FavController } from './fav.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Fav])],
  providers: [
    FavRepository,
    {
      inject: [FavRepository],
      provide: FavProvider,
      useFactory: (repository: FavRepository): FavProvider => [
        new AddFav(repository),
        new ListFav(repository),
        new RemoveFav(repository)
      ]
    }
  ],
  controllers: [FavController]
})
export class FavModule {}
