import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { City } from './entity/city.entity'
import { State } from './entity/state.entity'
import { Country } from './entity/country.entity'

import { CityRepository } from './city.repository'

import { LocationService } from './service/location.service'
import { SearchLocationService } from './service/search.location.service'

import { LocationController } from './location.controller'

@Module({
  imports: [TypeOrmModule.forFeature([City, State, Country])],
  providers: [
    CityRepository,
    LocationService,
    SearchLocationService
  ],
  controllers: [LocationController]
})
export class LocationModule {}
