import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Breed } from './breed.entity'
import { BreedRepository } from './breed.repository'

import { BreedProvider } from './breed.provider'

import { BreedController } from './breed.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Breed])],
  providers: [BreedProvider, BreedRepository],
  controllers: [BreedController]
})
export class BreedModule {}
