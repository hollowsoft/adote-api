import { Injectable } from '@nestjs/common'

import { ListHistoryService } from './list.history.service'

import { ListHistoryRequest } from '../request'
import { ListHistoryResponse } from '../response'

@Injectable()
export class HistoryService {
  constructor(
    private readonly LIST_HISTORY_SERVICE: ListHistoryService,
  ) {}

  all(request: ListHistoryRequest): Promise<ListHistoryResponse[]> {
    return this.LIST_HISTORY_SERVICE.run(request)
  }
}
