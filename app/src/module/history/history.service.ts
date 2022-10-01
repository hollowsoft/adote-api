import { Injectable } from '@nestjs/common'

import { History } from './entity/history.entity'

import { ListHistoryService } from './service/list.history.service'

@Injectable()
export class HistoryService {
  constructor(
    private readonly LIST_HISTORY_SERVICE: ListHistoryService,
  ) {}

  all(): Promise<History[]> {
    return this.LIST_HISTORY_SERVICE.run()
  }
}
