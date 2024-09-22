import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { FilterQuery, Model, mongo } from 'mongoose'

import { Breed, BreedDocument } from './breed.schema'

@Injectable()
export class BreedRepository {
  constructor(@InjectModel(Breed.name) private model: Model<Breed>) {}

  list(query: FilterQuery<Breed>): Promise<BreedDocument[]> {
    return this.model.find(query).exec()
  }

  save(list: Breed[]): Promise<BreedDocument[]> {
    return this.model.insertMany(list)
  }

  remove(query: FilterQuery<Breed>): Promise<mongo.DeleteResult> {
    return this.model.deleteMany(query).exec()
  }
}
