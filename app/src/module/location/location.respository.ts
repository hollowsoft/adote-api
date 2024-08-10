import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { mongo, Model, FilterQuery } from 'mongoose'

import { Location } from './location.type'

@Injectable()
export class LocationRepository {
  constructor(@InjectModel(Location.name) private model: Model<Location>) {}

  list(query?: FilterQuery<Location>): Promise<Location[]> {
    return this.model.find(query)
  }

  save(list: Location[]): Promise<Location[]> {
    return this.model.insertMany(list)
  }

  remove(query?: FilterQuery<Location>): Promise<mongo.DeleteResult> {
    return this.model.deleteMany(query)
  }
}
