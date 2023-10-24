import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import {
  Repository,
  FindOneOptions,
  FindManyOptions
} from 'typeorm'

import { Fav } from './entity/fav.entity'

import { IFavRepository } from './fav.repository.interface'

@Injectable()
export class FavRepository implements IFavRepository {
  constructor(@InjectRepository(Fav) private readonly repository: Repository<Fav>) {}

  all(option?: FindManyOptions<Fav>): Promise<Fav[]> {
    return this.repository.find(option)
  }

  find(option: FindOneOptions<Fav>): Promise<Fav | null> {
    return this.repository.findOne(option)
  }

  save(fav: Fav): Promise<Fav> {
    return this.repository.save(fav)
  }

  remove(fav: Fav): Promise<Fav> {
    return this.repository.remove(fav)
  }
}
