import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model, type FilterQuery } from 'mongoose'

import { Breed, type BreedDocument } from './breed.schema'

import { Kind } from '../type/kind.enum'

@Injectable()
export class BreedRepository {
  constructor(@InjectModel(Breed.name) private readonly model: Model<Breed>) {}

  list(query: FilterQuery<Breed>): Promise<BreedDocument[]> {
    return this.model.find(query).exec()
  }

  // prettier-ignore
  create(list: { name: string, kind: Kind }[]): Promise<BreedDocument[]> {
    return this.model.insertMany(list)
  }

  async remove(query: FilterQuery<Breed>): Promise<number> {
    const { deletedCount: amount } = await this.model.deleteMany(query).exec()

    return amount
  }
}
