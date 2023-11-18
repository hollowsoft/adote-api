import { Size } from '../../post/entity/pet/size.enum'
import { Gender } from '../../post/entity/pet/gender.enum'

import { Breed } from '../../breed/breed.entity'
import { History } from '../entity/history.entity'

export class HistoryResponse {
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
