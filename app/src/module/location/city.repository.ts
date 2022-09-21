import { Injectable } from '@nestjs/common'

import { Repository, Like } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

import { City } from './entity/city.entity'

@Injectable()
export class CityRepository {
  constructor(@InjectRepository(City) private readonly repository: Repository<City>) {}

  search(term: string): Promise<City[]> {
    return this.repository.findBy({ name: Like(`%${term}%`) })
  }
}
