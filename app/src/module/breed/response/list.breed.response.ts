import { Kind } from '../entity/kind.entity'
import { Breed } from '../entity/breed.entity'

export class ListBreedResponse {
  id: string
  key: string
  name: string
  kind: Kind

  constructor(breed: Breed) {
    this.id = breed.id
    this.key = breed.key
    this.name = breed.pt
    this.kind = breed.kind
  }
}
