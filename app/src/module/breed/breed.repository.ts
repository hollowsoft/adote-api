import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model } from 'mongoose'

import { Breed } from './breed.type'

@Injectable()
export class BreedRepository {
  constructor(@InjectModel(Breed.name) private model: Model<Breed>) {}

  list(): Promise<Breed[]> {
    return this.model.find().exec()
  }
}
