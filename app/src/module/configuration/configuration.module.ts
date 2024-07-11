import { Module } from '@nestjs/common'

import { UserModule } from '../user/user.module'
import { LocationModule } from '../location/location.module'

import { ConfigurationProvider } from './provider'
import { ConfigurationController } from './configuration.controller'

@Module({
  imports: [UserModule, LocationModule],
  providers: [ConfigurationProvider],
  controllers: [ConfigurationController]
})
export class ConfigurationModule {}
