import { Types } from 'mongoose'
import { BreedDocument } from './breed.type'

export class BreedResponse {
  readonly id: Types.ObjectId
  readonly name: string

  constructor(breed: BreedDocument) {
    this.id = new Types.ObjectId(breed._id)
    this.name = breed.name
  }
}
