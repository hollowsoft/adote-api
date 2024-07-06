import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model } from 'mongoose'

import { Location } from './location.type'

@Injectable()
export class LocationRepository {
  constructor(
    @InjectModel(Location.name) private model: Model<Location>
  ) {}

  list(): Promise<Location[]> {
    return this.model.find().exec()
  }

  async delete(criteria: {}, deleteMany: boolean = true): Promise<void> {
    if (deleteMany) {
      await this.model.deleteMany(criteria)
    } else {
      await this.model.deleteOne(criteria)
    }
  }

  async saveMany(locations: Location[]): Promise<Location[]> {
    return await this.model.insertMany(locations)
  }
}
