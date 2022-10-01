import { Injectable } from '@nestjs/common'

import { Like } from 'typeorm'

import { City } from '../entity/city.entity'
import { CityRepository } from '../city.repository'

import { isEmpty } from 'lodash'

@Injectable()
export class SearchLocationService {
  constructor(private readonly repository: CityRepository) {}

  async run(term?: string): Promise<City[]> {
    if (isEmpty(term)) {
      return []
    }

    return this.repository.all({
      where: {
        name: Like(`%${term}%`)
      }
    })
  }
}
