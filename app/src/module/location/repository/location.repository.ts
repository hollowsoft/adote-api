import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model, mongo, type FilterQuery } from 'mongoose'

import { Location, type LocationDocument } from '../repository/location.schema'

@Injectable()
export class LocationRepository {
  constructor(@InjectModel(Location.name) private readonly model: Model<Location>) {}

  list(query: FilterQuery<Location>): Promise<LocationDocument[]> {
    return this.model.find(query).exec()
  }

  save(location: Location[]): Promise<LocationDocument[]> {
    return this.model.insertMany(location)
  }

  remove(query: FilterQuery<Location>): Promise<mongo.DeleteResult> {
    return this.model.deleteMany(query).exec()
  }
}
