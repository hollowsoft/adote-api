import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Fav } from './fav.entity'
import { FavRepository } from './fav.repository'

import { FavProvider } from './fav.provider'

import { FavController } from './fav.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Fav])],
  providers: [FavProvider, FavRepository],
  controllers: [FavController]
})
export class FavModule {}
