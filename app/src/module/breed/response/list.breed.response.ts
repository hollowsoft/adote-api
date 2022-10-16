import { Kind } from '../entity/kind.enum'
import { Breed } from '../entity/breed.entity'

export class ListBreedResponse {
  readonly id: string
  readonly key: string
  readonly name: string
  readonly kind: Kind

  constructor(breed: Breed) {
    this.id = breed.id
    this.key = breed.key
    this.name = breed.pt
    this.kind = breed.kind
  }
}
