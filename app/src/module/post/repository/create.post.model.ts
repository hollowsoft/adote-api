import { Types } from 'mongoose'

import { Size } from '../type/size.enum'
import { Gender } from '../type/gender.enum'

import { PetRequest, CreatePostRequest } from '../post.request'

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
    this.breed = new Types.ObjectId(pet.breed)
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
    this.user = new Types.ObjectId(user)
    this.location = new Types.ObjectId(post.location)
    this.publish = post.publish
  }
}
