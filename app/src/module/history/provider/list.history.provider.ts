import { Injectable } from '@nestjs/common'

import { ListHistoryRequest } from '../history.request'
import { HistoryResponse } from '../history.response'
import { HistoryRepository } from '../repository/history.repository'

@Injectable()
export class ListHistoryProvider {
  constructor(private readonly repository: HistoryRepository) {}

  async run(request: ListHistoryRequest): Promise<HistoryResponse[]> {
    const list = await this.repository.list({})

    return []
  }
}
