import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { FilterQuery, Model } from 'mongoose'

import { History, HistoryDocument } from './history.schema'

@Injectable()
export class HistoryRepository {
  constructor(@InjectModel(History.name) private model: Model<History>) {}

  list(query: FilterQuery<History>): Promise<HistoryDocument[]> {
    return this.model.find(query).exec()
  }

  save(history: History): Promise<HistoryDocument> {
    return this.model.create(history)
  }
}
