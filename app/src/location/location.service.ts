import { Injectable } from '@nestjs/common'

import { Repository, Like } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

import { City } from './entity/city.entity'

@Injectable()
export class LocationService {
  constructor(@InjectRepository(City) private readonly repository: Repository<City>) {}

  find(term: string): Promise<City[]> {
    return this.repository.find({ name: Like(`%${term}%`) })
  }
}
