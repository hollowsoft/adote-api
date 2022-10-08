import { City } from '../entity/city.entity'

export class SearchLocationResponse {
  readonly id: string
  readonly city: string
  readonly state: string

  constructor(city: City) {
    const { state } = city

    this.id = city.id
    this.city = city.pt
    this.state = state.pt
  }
}
