import { Types } from 'mongoose'
import { Size } from '../type/size.enum'
import { Gender } from '../type/gender.enum'
import { PatchPostRequest, PetRequest } from '../post.request'

class PatchPet {
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

export class PatchPost {
  readonly title: string
  readonly description: string
  readonly image: string[]
  readonly pet: PatchPet
  readonly location: Types.ObjectId

  constructor(post: PatchPostRequest) {
    this.title = post.title
    this.description = post.description
    this.image = post.image
    this.pet = new PatchPet(post.pet)
    this.location = new Types.ObjectId(post.location)
  }
}
