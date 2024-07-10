import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { LocationSchema } from '@/module/location/location.type'
import { LocationRepository } from '@/module/location/location.respository'
import { UserRepository } from '@/module/user/user.repository'

import { ConfigurationProvider } from './provider'
import { ConfigurationController } from './configuration.controller'
import { UserSchema } from '../user/user.type'

@Module({
  imports: [MongooseModule.forFeature([LocationSchema, UserSchema])],
  providers: [ConfigurationProvider, LocationRepository, UserRepository],
  controllers: [ConfigurationController]
})
export class ConfigurationModule {}
