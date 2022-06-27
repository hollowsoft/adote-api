import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Breed } from './entity/breed.entity'

import { GetBreedCase } from './case/get.breed.case'

import { BreedService } from './breed.service'
import { BreedRepository } from './breed.repository'

import { BreedController } from './breed.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Breed])],
  providers: [BreedRepository, BreedService, GetBreedCase],
  controllers: [BreedController],
})
export class BreedModule {}
