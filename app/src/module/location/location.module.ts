import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Location } from './location.entity'
import { LocationRepository } from './location.respository'

import { LocationProvider } from './location.provider'

import { LocationController } from './location.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Location])],
  providers: [LocationProvider, LocationRepository],
  controllers: [LocationController]
})
export class LocationModule {}
