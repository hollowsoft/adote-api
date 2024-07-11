import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { LocationSchema } from './location.type'
import { LocationRepository } from './location.respository'

import { LocationProvider } from './provider'
import { LocationController } from './location.controller'

@Module({
  imports: [MongooseModule.forFeature([LocationSchema])],
  exports: [LocationRepository],
  providers: [LocationProvider, LocationRepository],
  controllers: [LocationController]
})
export class LocationModule {}
