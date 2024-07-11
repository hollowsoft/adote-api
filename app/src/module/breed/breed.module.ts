import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { BreedSchema } from './breed.type'
import { BreedRepository } from './breed.repository'

import { BreedProvider } from './provider'
import { BreedController } from './breed.controller'

@Module({
  imports: [MongooseModule.forFeature([BreedSchema])],
  exports: [BreedRepository],
  providers: [BreedProvider, BreedRepository],
  controllers: [BreedController]
})
export class BreedModule {}
