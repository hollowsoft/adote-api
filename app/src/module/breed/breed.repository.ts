import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { mongo, Model, FilterQuery } from 'mongoose'

import { Breed } from './breed.type'

@Injectable()
export class BreedRepository {
  constructor(@InjectModel(Breed.name) private model: Model<Breed>) {}

  list(query?: FilterQuery<Breed>): Promise<Breed[]> {
    return this.model.find(query)
  }

  save(list: Breed[]): Promise<Breed[]> {
    return this.model.insertMany(list)
  }

  remove(query?: FilterQuery<Breed>): Promise<mongo.DeleteResult> {
    return this.model.deleteMany(query)
  }
}
