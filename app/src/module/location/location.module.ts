import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { LocationSchema } from './location.type'
import { LocationRepository } from './location.respository'

import { SearchLocation, LocationProvider } from './provider'

import { LocationController } from './location.controller'

@Module({
  imports: [MongooseModule.forFeature([LocationSchema])],
  providers: [SearchLocation, LocationProvider, LocationRepository],
  controllers: [LocationController]
})
export class LocationModule {}
