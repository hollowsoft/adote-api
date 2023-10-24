import { Injectable } from '@nestjs/common'

import { ListHistoryService } from './list.history.service'

import { ListHistoryRequest } from '../request'

import { HistoryResponse } from '../response'

import { IHistoryService } from './history.service.interface'

@Injectable()
export class HistoryService implements IHistoryService {
  constructor(private readonly LIST_HISTORY_SERVICE: ListHistoryService) {}

  all(request: ListHistoryRequest): Promise<HistoryResponse[]> {
    return this.LIST_HISTORY_SERVICE.run(request)
  }
}
