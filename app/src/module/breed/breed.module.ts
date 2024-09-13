import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { BreedController } from './breed.controller'
import { BreedRepository } from './breed.repository'
import { BreedSchema } from './breed.type'
import { BreedProvider } from './provider'

@Module({
  imports: [MongooseModule.forFeature([BreedSchema])],
  exports: [BreedRepository],
  providers: [BreedProvider, BreedRepository],
  controllers: [BreedController]
})
export class BreedModule {}
