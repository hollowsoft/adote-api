import { Module } from '@nestjs/common'

import { UserModule } from '../user/user.module'
import { LocationModule } from '../location/location.module'

import { ConfigurationProvider } from './provider'
import { ConfigurationController } from './configuration.controller'
import { BreedModule } from '../breed/breed.module'

@Module({
  imports: [UserModule, LocationModule, BreedModule],
  providers: [ConfigurationProvider],
  controllers: [ConfigurationController]
})
export class ConfigurationModule {}
