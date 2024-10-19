import { Types } from 'mongoose'

import { CreatePostRequest, PetRequest } from '../post.request'
import { Gender } from '../type/gender.enum'
import { Size } from '../type/size.enum'

class CreatePet {
  readonly name: string
  readonly age: number
  readonly size: Size
  readonly gender: Gender
  readonly breed: Types.ObjectId

  constructor(pet: PetRequest) {
    this.name = pet.name
    this.age = pet.age
    this.size = pet.size
    this.gender = pet.gender
    this.breed = pet.breed.ObjectId
  }
}

export class CreatePost {
  readonly name: string
  readonly description: string
  readonly image: string[]
  readonly pet: CreatePet
  readonly user: Types.ObjectId
  readonly location: Types.ObjectId
  readonly publish: boolean

  constructor(post: CreatePostRequest, user: string) {
    this.name = post.name
    this.description = post.description
    this.image = post.image
    this.pet = new CreatePet(post.pet)
    this.user = user.ObjectId
    this.location = post.location.ObjectId
    this.publish = post.publish
  }
}
