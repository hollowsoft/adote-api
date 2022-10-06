import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Breed } from './entity/breed.entity'
import { BreedRepository } from './breed.repository'

import { BreedService } from './service/breed.service'
import { ListBreedService } from './service/list.breed.service'

import { BreedController } from './breed.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Breed])],
  providers: [
    BreedRepository,
    BreedService,
    ListBreedService
  ],
  controllers: [BreedController],
})
export class BreedModule {}
