import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Location } from '../location/location.type'
import { Model } from 'mongoose'

@Injectable()
export class ApplicationRepository {
  constructor(
    @InjectModel(Location.name) private model: Model<Location>
  ) {}

  async save(locationData: {
    city: string
    state: string
  }): Promise<Location> {
    const location = new this.model(locationData)
    return await location.save()
  }

  async deleteAll(): Promise<void> {
    await this.model.deleteMany({})
  }

  async saveMany(
    locations: { city: string; state: string }[]
  ): Promise<Location[]> {
    return await this.model.insertMany(locations)
  }
}
