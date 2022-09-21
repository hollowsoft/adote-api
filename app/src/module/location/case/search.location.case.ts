import { Injectable } from '@nestjs/common'

import { City } from '../entity/city.entity'

import { CityRepository } from '../city.repository'

@Injectable()
export class SearchLocationCase {
  constructor(private readonly repository: CityRepository) {}

  run(term: string): Promise<City[]> {
    return this.repository.search(term)
  }
}
