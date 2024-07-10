import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { LocationSchema } from '@/module/location/location.type'
import { LocationRepository } from '@/module/location/location.respository'

import { ConfigurationProvider } from './provider'
import { ConfigurationController } from './configuration.controller'

@Module({
  imports: [MongooseModule.forFeature([LocationSchema])],
  providers: [ConfigurationProvider, LocationRepository],
  controllers: [ConfigurationController]
})
export class ConfigurationModule {}
