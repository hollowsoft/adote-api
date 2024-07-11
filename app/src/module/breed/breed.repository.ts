import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { FilterQuery, Model, mongo } from 'mongoose'

import { Breed } from './breed.type'

@Injectable()
export class BreedRepository {
  constructor(@InjectModel(Breed.name) private model: Model<Breed>) {}

  list(): Promise<Breed[]> {
    return this.model.find().exec()
  }

  save(breed: Breed[]): Promise<Breed[]> {
    return this.model.insertMany(breed)
  }

  remove(query?: FilterQuery<Breed>): Promise<mongo.DeleteResult> {
    return this.model.deleteMany(query)
  }
}
