import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model, type FilterQuery } from 'mongoose'

import { Location, type LocationDocument } from '../repository/location.schema'

@Injectable()
export class LocationRepository {
  constructor(@InjectModel(Location.name) private readonly model: Model<Location>) {}

  list(query: FilterQuery<Location>): Promise<LocationDocument[]> {
    return this.model.find(query).exec()
  }

  // prettier-ignore
  create(list: { city: string, state: string }[]): Promise<LocationDocument[]> {
    return this.model.insertMany(list)
  }

  async remove(query: FilterQuery<Location>): Promise<number> {
    const { deletedCount: amount } = await this.model.deleteMany(query).exec()

    return amount
  }
}
