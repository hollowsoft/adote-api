import type { BreedDocument } from '@/module/breed/repository/breed.schema'
import type { LocationDocument } from '@/module/location/repository/location.schema'
import { Contact, User } from '@/module/user/repository/user.schema'

import { Pet, type PostDocument } from './repository/post.schema'
import { Gender } from './type/gender.enum'
import { Size } from './type/size.enum'

export class PostResponse {
  readonly id: string
  readonly description: string
  readonly image: string[]
  readonly pet: PetResponse
  readonly user: UserResponse
  readonly location: LocationResponse

  constructor(post: PostDocument) {
    this.id = post.id
    this.description = post.description
    this.image = post.image
    this.pet = new PetResponse(post.pet)
    this.user = new UserResponse(post.user)
    this.location = new LocationResponse(post.location)
  }
}

class PetResponse {
  readonly name: string
  readonly age: number
  readonly size: Size
  readonly gender: Gender
  readonly breed: BreedResponse

  constructor(pet: Pet) {
    this.name = pet.name
    this.age = pet.age
    this.size = pet.size
    this.gender = pet.gender
    this.breed = new BreedResponse(pet.breed)
  }
}

class BreedResponse {
  readonly id: string
  readonly name: string

  constructor(breed: BreedDocument) {
    this.id = breed.id
    this.name = breed.name
  }
}

class UserResponse {
  readonly name: string
  readonly image: string
  readonly contact: ContactResponse

  constructor(user: User) {
    this.name = user.name
    this.image = user.image
    this.contact = new ContactResponse(user.contact)
  }
}

class ContactResponse {
  readonly mail: string
  readonly phone: string
  readonly social: string

  constructor(readonly contact: Contact) {
    this.mail = contact?.mail
    this.phone = contact?.phone
    this.social = contact?.social
  }
}

class LocationResponse {
  readonly id: string
  readonly city: string
  readonly state: string

  constructor(location: LocationDocument) {
    this.id = location.id
    this.city = location.city
    this.state = location.state
  }
}

export class PublishPostResponse {
  constructor(
    readonly id: string,
    readonly publish: boolean
  ) {}
}
