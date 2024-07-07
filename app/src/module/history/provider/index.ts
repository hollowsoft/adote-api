import { Injectable } from '@nestjs/common'

import { ListHistoryProvider } from './list.history.provider'

import { HistoryRepository } from '../history.repository'

@Injectable()
export class HistoryProvider {
  readonly list: ListHistoryProvider = new ListHistoryProvider(this.repository)

  constructor(private readonly repository: HistoryRepository) {}
}
