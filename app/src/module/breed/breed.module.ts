import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Breed } from './entity/breed.entity'
import { BreedRepository } from './breed.repository'

import { BreedService } from './breed.service'
import { ListBreedCase } from './case/list.breed.case'

import { BreedController } from './breed.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Breed])],
  providers: [
    BreedService,
    BreedRepository,
    ListBreedCase
  ],
  controllers: [BreedController],
})
export class BreedModule {}
