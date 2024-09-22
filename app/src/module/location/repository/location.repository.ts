import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { FilterQuery, Model, mongo } from 'mongoose'

import { Location, LocationDocument } from '../repository/location.schema'

@Injectable()
export class LocationRepository {
  constructor(@InjectModel(Location.name) private model: Model<Location>) {}

  list(query: FilterQuery<Location>): Promise<LocationDocument[]> {
    return this.model.find(query).exec()
  }

  save(list: Location[]): Promise<LocationDocument[]> {
    return this.model.insertMany(list)
  }

  remove(query: FilterQuery<Location>): Promise<mongo.DeleteResult> {
    return this.model.deleteMany(query).exec()
  }
}
