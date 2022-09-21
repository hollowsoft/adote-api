import { Breed } from '../entity/breed.entity'

export class GetBreedResponse {
  id: string
  key: string

  constructor(breed: Breed) {
    this.id = breed.id
    this.key = breed.key
  }
}
