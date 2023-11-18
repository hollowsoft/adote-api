import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import {
  Repository,
  FindOneOptions,
  FindManyOptions,
  SaveOptions,
  RemoveOptions
} from 'typeorm'

import { Location } from './location.entity'

import EntityRepository from 'src/repository.interface'

@Injectable()
export class LocationRepository implements EntityRepository<Location> {
  constructor(
    @InjectRepository(Location)
    private readonly repository: Repository<Location>
  ) {}

  all(option?: FindManyOptions<Location>): Promise<Location[]> {
    return this.repository.find(option)
  }

  find(option: FindOneOptions<Location>): Promise<Location | null> {
    throw new Error()
  }

  save(location: Location, option?: SaveOptions): Promise<Location> {
    throw new Error()
  }

  remove(location: Location, option?: RemoveOptions): Promise<Location> {
    throw new Error()
  }
}
