import { City } from '../entity/city.entity'

export class SearchLocationResponse {
  id: string
  name: string

  constructor(city: City) {
    this.id = city.id
    this.name = city.name
  }
}
