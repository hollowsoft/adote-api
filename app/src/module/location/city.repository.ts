import { Injectable } from '@nestjs/common'

import { InjectRepository } from '@nestjs/typeorm'

import { Repository, FindManyOptions } from 'typeorm'

import { City } from './entity/city.entity'

import { ICityRepository } from './city.repository.interface'

@Injectable()
export class CityRepository implements ICityRepository {
  constructor(@InjectRepository(City) private readonly repository: Repository<City>) {}

  all(option?: FindManyOptions<City>): Promise<City[]> {
    return this.repository.find(option)
  }
}
