import { Size } from '../../post/entity/pet/size.enum'
import { Gender } from '../../post/entity/pet/gender.enum'

import { Breed } from '../../breed/entity/breed.entity'

import { History } from '../entity/history.entity'

export class ListHistoryResponse {
  id: string
  create: Date
  name: string
  image: string
  age: [number, number]
  size: Size
  gender: Gender
  breed: Breed

  constructor(history: History) {
    this.id = history.id
    this.create = history.create
    this.name = history.name
    this.image = history.image
    this.age = history.age
    this.size = history.size
    this.gender = history.gender
    this.breed = history.breed
  }
}
