import { Module } from '@nestjs/common'
import { ConfigurationController } from './controller/configuration.controller'
import { ConfigurationProvider } from './configuration.provider'
import { MongooseModule } from '@nestjs/mongoose'
import { LocationSchema } from '../location/location.type'
import { LoadLocation } from './provider/load.configuration'
import { LocationRepository } from '../location/location.respository'

@Module({
  imports: [MongooseModule.forFeature([LocationSchema])],
  controllers: [ConfigurationController],
  providers: [LoadLocation, ConfigurationProvider, LocationRepository]
})
export class ConfigurationModule {}
