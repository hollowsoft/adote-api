import { Post } from '../entity/post.entity'

import { Size } from '../entity/pet/size.enum'
import { Gender } from '../entity/pet/gender.enum'

export class GetPostResponse {
  readonly id: string
  readonly create: Date
  readonly title: string
  readonly description: string
  readonly image: string[]
  readonly pet: PetResponse
  readonly location: LocationResponse
  readonly user: UserResponse

  constructor(post: Post) {
    const { pet, city, user } = post

    const { breed } = pet
    const { state } = city
    const { contact } = user

    this.id = post.id
    this.create = post.create
    this.title = post.title
    this.description = post.description
    this.image = post.image
    this.pet = {
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
    this.user = {
      create: user.create,
      name: user.name,
      image: user.image,
      description: user.description,
      contact: {
        mail: contact?.mail ?? user.mail,
        phone: contact?.phone,
        social: contact?.social
      }
    }
  }
}

class PetResponse {
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

class UserResponse {
  readonly create: Date
  readonly name: string
  readonly image: string
  readonly description: string
  readonly contact: ContactResponse
}

class ContactResponse {
  readonly mail: string
  readonly phone: string
  readonly social: string
}