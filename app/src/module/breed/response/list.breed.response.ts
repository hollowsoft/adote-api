import { Breed } from '../entity/breed.entity'

export class ListBreedResponse {
  id: string
  key: string
  name: string

  constructor(breed: Breed) {
    this.id = breed.id
    this.key = breed.key
    this.name = breed.pt
  }
}
