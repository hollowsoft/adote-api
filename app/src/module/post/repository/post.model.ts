import { PetRequest, SavePostRequest, SavePublishPostRequest } from '../post.request'
import { Gender } from '../type/gender.enum'
import { Size } from '../type/size.enum'

class SavePet {
  readonly name: string
  readonly birth: Date
  readonly size: Size
  readonly gender: Gender
  readonly breed: string // types.ObjectId

  constructor(request: PetRequest) {
    this.name = request.name
    this.birth = request.birth
    this.size = request.size
    this.gender = request.gender
    this.breed = request.breed
  }
}

export class SavePost {
  readonly description: string
  readonly image: string[]
  readonly pet: SavePet
  readonly user: string // types.ObjectId
  readonly location: string // types.ObjectId
  readonly publish: boolean

  constructor(request: SavePostRequest, user: string) {
    this.description = request.description
    this.image = request.image
    this.pet = new SavePet(request.pet)
    this.user = user
    this.publish = request.publish
  }
}

export class SavePublishPost {
  readonly publish: boolean

  constructor(request: SavePublishPostRequest) {
    this.publish = request.publish
  }
}
