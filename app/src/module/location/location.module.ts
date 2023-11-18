import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { SearchLocation, LocationProvider } from './provider'

import { LocationRepository } from './location.respository'

import { LocationController } from './location.controller'

@Module({
  imports: [TypeOrmModule.forFeature([LocationRepository])],
  providers: [
    {
      inject: [LocationRepository],
      provide: LocationProvider,
      useFactory: (repository: LocationRepository): LocationProvider => {
        return [new SearchLocation(repository)]
      }
    }
  ],
  controllers: [LocationController]
})
export class LocationModule {}
