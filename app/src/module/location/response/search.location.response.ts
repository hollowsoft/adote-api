import { City } from '../entity/city.entity'

class StateResponse {
  id: string
  name: string
}

export class SearchLocationResponse {
  id: string
  name: string
  state: StateResponse

  constructor(city: City) {
    this.id = city.id
    this.name = city.name
    this.state = {
      id: city.state.id,
      name: city.state.name
    }
  }
}
