import { Module } from '@nestjs/common'

import { BreedModule } from '@/module/breed/breed.module'
import { LocationModule } from '@/module/location/location.module'
import { UserModule } from '@/module/user/user.module'

import { ConfigurationController } from './configuration.controller'
import { ConfigurationProvider } from './provider'

@Module({
  imports: [UserModule, BreedModule, LocationModule],
  providers: [ConfigurationProvider],
  controllers: [ConfigurationController]
})
export class ConfigurationModule {}
