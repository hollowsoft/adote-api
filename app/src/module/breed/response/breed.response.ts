import { Kind } from '../entity/kind.enum'
import { Breed } from '../entity/breed.entity'

export class BreedResponse {
  readonly id: string
  readonly name: string
  readonly kind: Kind

  constructor(breed: Breed) {
    this.id = breed.id
    this.name = breed.pt
    this.kind = breed.kind
  }
}
