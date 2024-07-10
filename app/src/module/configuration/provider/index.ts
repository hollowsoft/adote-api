import { Injectable } from '@nestjs/common'

import { SetLocation } from './set.location'

import { LocationRepository } from '@/module/location/location.respository'
import { SetUser } from './set.user'
import { UserRepository } from '@/module/user/user.repository'

@Injectable()
export class ConfigurationProvider {
  readonly location: SetLocation = new SetLocation(this.locationRepository)
  readonly user: SetUser = new SetUser(this.userRepository)

  constructor(
    private readonly locationRepository: LocationRepository,
    private readonly userRepository: UserRepository
  ) {}
}
