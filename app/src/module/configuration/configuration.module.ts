import { Module } from '@nestjs/common'

import { ConfigurationController } from './configuration.controller'
import { ConfigurationProvider } from './provider'

import { BreedModule } from '../breed/breed.module'
import { LocationModule } from '../location/location.module'
import { UserModule } from '../user/user.module'

@Module({
  imports: [UserModule, BreedModule, LocationModule],
  providers: [ConfigurationProvider],
  controllers: [ConfigurationController]
})
export class ConfigurationModule {}
