import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Breed } from './breed.entity'
import { BreedRepository } from './breed.repository'

import { ListBreed, BreedProvider } from './provider'

import { BreedController } from './breed.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Breed])],
  providers: [
    {
      inject: [BreedRepository],
      provide: BreedProvider,
      useFactory: (repository: BreedRepository): BreedProvider => [
        new ListBreed(repository)
      ]
    }
  ],
  controllers: [BreedController]
})
export class BreedModule {}
