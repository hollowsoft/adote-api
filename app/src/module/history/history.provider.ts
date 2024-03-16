import { Injectable } from '@nestjs/common'

import { ListHistory } from './provider'

import { HistoryRepository } from './history.repository'

export enum Action {
  ListHistory
}

@Injectable()
export class HistoryProvider {
  action: [ListHistory]

  constructor(private readonly repository: HistoryRepository) {
    this.action = [new ListHistory(this.repository)]
  }
}
