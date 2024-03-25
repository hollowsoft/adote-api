import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model } from 'mongoose'

import { Location } from './location.type'

@Injectable()
export class LocationRepository {
  constructor(@InjectModel(Location.name) private model: Model<Location>) {}

  list(): Promise<Location[]> {
    return this.model.find().exec()
  }
}
