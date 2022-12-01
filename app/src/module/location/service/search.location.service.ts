import { Injectable } from '@nestjs/common'

import { Like } from 'typeorm'

import { CityRepository } from '../city.repository'

import { SearchLocationRequest } from '../request'
import { SearchLocationResponse } from '../response'

import { isEmpty } from 'lodash'

@Injectable()
export class SearchLocationService {
  constructor(private readonly repository: CityRepository) {}

  async run(request: SearchLocationRequest): Promise<SearchLocationResponse[]> {
    const { term } = request

    if (isEmpty(term)) {
      return []
    }

    const list = await this.repository.all({
      where: {
        pt: Like(`%${term}%`)
      },
      relations: [
        'state'
      ]
    })

    return list.map((city) => new SearchLocationResponse(city))
  }
}
