import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model, mongo, type FilterQuery } from 'mongoose'

import { SaveBreed } from './breed.model'
import { Breed, type BreedDocument } from './breed.schema'

@Injectable()
export class BreedRepository {
  constructor(@InjectModel(Breed.name) private readonly model: Model<Breed>) {}

  list(query: FilterQuery<Breed>): Promise<BreedDocument[]> {
    return this.model.find(query).exec()
  }

  save(breed: SaveBreed[]): Promise<BreedDocument[]> {
    return this.model.insertMany(breed)
  }

  remove(query: FilterQuery<Breed>): Promise<mongo.DeleteResult> {
    return this.model.deleteMany(query).exec()
  }
}
