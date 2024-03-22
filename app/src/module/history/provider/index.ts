import { Injectable } from '@nestjs/common'

import { ListHistory } from './list.history'

export enum Action {
  List
}

@Injectable()
export class HistoryProvider {
  action: [ListHistory]

  constructor(private readonly list: ListHistory) {
    this.action = [this.list]
  }
}
