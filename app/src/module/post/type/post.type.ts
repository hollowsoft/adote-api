import { Size } from './size.enum'
import { Gender } from './gender.enum'

class Pet {
  name: string
  age: number
  size: Size
  gender: Gender
  breed: string
}

export class CreatePost {
  name: string
  description: string
  image: string[]
  pet: Pet
  user: string
  location: string
  publish: boolean
}
