import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import {
  Repository,
  FindOneOptions,
  FindManyOptions,
  SaveOptions,
  RemoveOptions
} from 'typeorm'

import { History } from './history.entity'

import { EntityRepository } from 'src/repository.interface'

@Injectable()
export class HistoryRepository implements EntityRepository<History> {
  constructor(
    @InjectRepository(History) private readonly repository: Repository<History>
  ) {}

  all(option?: FindManyOptions<History>): Promise<History[]> {
    return this.repository.find(option)
  }

  find(option: FindOneOptions<History>): Promise<History> {
    throw new Error()
  }

  save(history: History, option?: SaveOptions): Promise<History> {
    return this.repository.save(history)
  }

  remove(history: History, option?: RemoveOptions): Promise<History> {
    throw new Error()
  }
}
