import { Size } from '../../post/entity/pet/size.entity'
import { Gender } from '../../post/entity/pet/gender.entity'

import { Breed } from '../../breed/entity/breed.entity'

import { History } from '../entity/history.entity'

export class ListHistoryResponse {
  readonly id: string
  readonly create: Date
  readonly name: string
  readonly image: string
  readonly age: [number, number]
  readonly size: Size
  readonly gender: Gender
  readonly breed: Breed

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
