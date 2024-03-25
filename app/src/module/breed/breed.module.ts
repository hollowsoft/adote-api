import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { BreedSchema } from './breed.type'
import { BreedRepository } from './breed.repository'

import { ListBreed, BreedProvider } from './provider'

import { BreedController } from './breed.controller'

@Module({
  imports: [MongooseModule.forFeature([BreedSchema])],
  providers: [ListBreed, BreedProvider, BreedRepository],
  controllers: [BreedController]
})
export class BreedModule {}
