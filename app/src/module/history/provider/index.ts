import { Injectable } from '@nestjs/common'

import { ListHistory } from './list.history'

import { HistoryRepository } from '../history.repository'

@Injectable()
export class HistoryProvider {
  readonly list: ListHistory = new ListHistory(this.repository)

  constructor(private readonly repository: HistoryRepository) {}
}
