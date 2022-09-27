import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import {
  Repository,
  FindManyOptions
} from 'typeorm'

import { Fav } from './entity/fav.entity'

@Injectable()
export class FavRepository {
  constructor(@InjectRepository(Fav) private readonly repository: Repository<Fav>) {}

  all(option?: FindManyOptions<Fav>): Promise<Fav[]> {
    return this.repository.find(option)
  }

  save(fav: Fav): Promise<Fav> {
    return this.repository.save(fav)
  }

  delete() {
    
  }
}
