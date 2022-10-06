import { Injectable } from '@nestjs/common'

import { HistoryRepository } from '../history.repository'

import { ListHistoryRequest } from '../request'
import { ListHistoryResponse } from '../response'

@Injectable()
export class ListHistoryService {
  constructor(private readonly repository: HistoryRepository) {}

  async run(request: ListHistoryRequest): Promise<ListHistoryResponse[]> {
    const list = await this.repository.all({
      order: {
        create: 'desc'
      }
    })

    return list.map((history) => new ListHistoryResponse(history))
  }
}
