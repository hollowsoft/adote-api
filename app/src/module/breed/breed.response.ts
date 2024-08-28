import { BreedDocument } from './breed.type'

export class BreedResponse {
  readonly id: string
  readonly name: string

  constructor(breed: BreedDocument) {
    this.id = breed.id
    this.name = breed.name
  }
}
