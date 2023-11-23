import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import {
  Repository,
  SaveOptions,
  RemoveOptions,
  FindOneOptions,
  FindManyOptions
} from 'typeorm'

import { Fav } from './fav.entity'

import { EntityRepository } from 'src/repository.interface'

@Injectable()
export class FavRepository implements EntityRepository<Fav> {
  constructor(@InjectRepository(Fav) private readonly repository: Repository<Fav>) {}

  all(option?: FindManyOptions<Fav>): Promise<Fav[]> {
    return this.repository.find(option)
  }

  find(option: FindOneOptions<Fav>): Promise<Fav | null> {
    return this.repository.findOne(option)
  }

  save(fav: Fav, option?: SaveOptions): Promise<Fav> {
    return this.repository.save(fav, option)
  }

  remove(fav: Fav, option?: RemoveOptions): Promise<Fav> {
    return this.repository.remove(fav, option)
  }
}
