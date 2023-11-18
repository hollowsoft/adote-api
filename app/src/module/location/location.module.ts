import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Location } from './location.entity'
import { LocationRepository } from './location.respository'

import { SearchLocation, LocationProvider } from './provider'

import { LocationController } from './location.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Location])],
  providers: [
    {
      inject: [LocationRepository],
      provide: LocationProvider,
      useFactory: (repository: LocationRepository): LocationProvider => [
        new SearchLocation(repository)
      ]
    }
  ],
  controllers: [LocationController]
})
export class LocationModule {}
