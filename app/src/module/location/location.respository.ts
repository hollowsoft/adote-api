import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model } from 'mongoose'

import { Location } from './location.type'
import { LocationResponse } from './location.response'

@Injectable()
export class LocationRepository {
  constructor(
    @InjectModel(Location.name) private model: Model<Location>
  ) {}

  list(): Promise<Location[]> {
    return this.model.find().exec()
  }

  async deleteAll(): Promise<void> {
    await this.model.deleteMany({})
  }

  async saveMany(
    locations: { city: string; state: string }[]
  ): Promise<LocationResponse[]> {
    return await this.model.insertMany(locations)
  }
}
