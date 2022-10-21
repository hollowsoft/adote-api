import { Post } from '../entity/post.entity'

import { Size } from '../entity/pet/size.enum'
import { Gender } from '../entity/pet/gender.enum'

export class CreatePostResponse {
  readonly id: string
  readonly create: Date
  readonly title: string
  readonly description: string
  readonly image: string[]
  readonly pet: PetResponse
  readonly location: LocationResponse

  constructor(post: Post) {
    const { pet, pet: { breed }, city, city: { state } } = post

    this.id = post.id
    this.create = post.create
    this.title = post.title
    this.description = post.description
    this.image = post.image
    this.pet = {
      id: pet.id,
      name: pet.name,
      age: pet.age,
      size: pet.size,
      gender: pet.gender,
      breed: {
        id: breed.id,
        name: breed.pt
      }
    }
    this.location = {
      id: city.id,
      city: city.pt,
      state: state.pt
    }
  }
}

class PetResponse {
  readonly id: string
  readonly name: string
  readonly age: [number, number]
  readonly size: Size
  readonly gender: Gender
  readonly breed: BreedResponse
}

class BreedResponse {
  readonly id: string
  readonly name: string
}

class LocationResponse {
  readonly id: string
  readonly city: string
  readonly state: string
}
