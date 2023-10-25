import { Injectable } from '@nestjs/common'

import { ILike } from 'typeorm'

import { CityRepository } from '../city.repository'

import { SearchLocationRequest } from '../request'

import { LocationResponse } from '../response'

import { isEmpty } from 'lodash'

import { ISearchLocationService } from './search.location.service.interface'

@Injectable()
export class SearchLocationService implements ISearchLocationService {
  constructor(private readonly repository: CityRepository) {}

  async run(request: SearchLocationRequest): Promise<LocationResponse[]> {
    const { term } = request

    if (isEmpty(term)) {
      return []
    }

    const list = await this.repository.all({
      where: {
        pt: ILike(`${term}%`),
      },
      relations: ['state'],
    })

    return list.map((city) => new LocationResponse(city))
  }
}
