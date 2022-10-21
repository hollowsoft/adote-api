import { Post } from '../entity/post.entity'

import { Size } from '../entity/pet/size.enum'
import { Gender } from '../entity/pet/gender.enum'

export class ListPostResponse {
  readonly id: string
  readonly create: Date
  readonly title: string
  readonly image: string[]
  readonly pet: PetResponse
  readonly location: LocationResponse

  constructor(post: Post) {
    const { pet, city, city: { state } } = post

    this.id = post.id
    this.create = post.create
    this.title = post.title
    this.image = post.image
    this.pet = {
      name: pet.name,
      age: pet.age,
      size: pet.size,
      gender: pet.gender
    },
    this.location = {
      city: city.pt,
      state: state.pt
    }
  }
}

class PetResponse {
  readonly name: string
  readonly age: [number, number]
  readonly size: Size
  readonly gender: Gender
}

class LocationResponse {
  readonly city: string
  readonly state: string
}
