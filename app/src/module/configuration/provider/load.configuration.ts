import { Injectable } from '@nestjs/common'
import { LocationRepository } from '@/module/location/location.respository'
import locations from '../../../../location.json'

@Injectable()
export class LoadLocation {
  constructor(private repository: LocationRepository) {}

  async run(): Promise<void> {
    const location: any = locations

    await this.repository.delete({})

    await this.repository.saveMany(location)
  }
}
