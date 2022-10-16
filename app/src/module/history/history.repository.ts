import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import {
  Repository,
  FindManyOptions
} from 'typeorm'

import { History } from './entity/history.entity'

@Injectable()
export class HistoryRepository {
  constructor(@InjectRepository(History) private readonly repository: Repository<History>) {}

  all(option?: FindManyOptions<History>): Promise<History[]> {
    return this.repository.find(option)
  }

  save(history: History): Promise<History> {
    return this.repository.save(history)
  }
}
