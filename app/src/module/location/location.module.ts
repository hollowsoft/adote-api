import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { LocationController } from './location.controller'
import { LocationRepository } from './location.repository'
import { LocationSchema } from './location.type'
import { LocationProvider } from './provider'

@Module({
  imports: [MongooseModule.forFeature([LocationSchema])],
  exports: [LocationRepository],
  providers: [LocationProvider, LocationRepository],
  controllers: [LocationController]
})
export class LocationModule {}
