import { Injectable } from '@nestjs/common'

import { History } from './entity/history.entity'

import { ListHistoryCase } from './case/list.history.case'

@Injectable()
export class HistoryService {
  constructor(
    private readonly LIST_HISTORY_CASE: ListHistoryCase,
  ) {}

  all(): Promise<History[]> {
    return this.LIST_HISTORY_CASE.run()
  }
}
