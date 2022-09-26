import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { City } from './entity/city.entity'
import { State } from './entity/state.entity'
import { Country } from './entity/country.entity'

import { CityRepository } from './city.repository'

import { LocationService } from './location.service'
import { SearchLocationCase } from './case/search.location.case'

import { LocationController } from './location.controller'

@Module({
  imports: [TypeOrmModule.forFeature([City, State, Country])],
  providers: [
    LocationService,
    CityRepository,
    SearchLocationCase
  ],
  controllers: [LocationController]
})
export class LocationModule {}
