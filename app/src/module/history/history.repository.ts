import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model } from 'mongoose'

import { History } from './history.type'

@Injectable()
export class HistoryRepository {
  constructor(@InjectModel(History.name) private model: Model<History>) {}

  list(): Promise<History[]> {
    return this.model.find().exec()
  }

  save(history: History): Promise<History> {
    return new this.model({}).save()
  }
}
