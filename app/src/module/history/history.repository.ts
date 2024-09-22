import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { FilterQuery, Model } from 'mongoose'

import { History } from './history.type'

@Injectable()
export class HistoryRepository {
  constructor(@InjectModel(History.name) private model: Model<History>) {}

  list(query: FilterQuery<History>): Promise<History[]> {
    return this.model.find(query).exec()
  }

  save(history: History): Promise<History> {
    return this.model.create(history)
  }
}
