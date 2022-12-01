import { Injectable } from '@nestjs/common'

import { HistoryRepository } from '../history.repository'

import { ListHistoryRequest } from '../request'

import { HistoryResponse } from '../response'

@Injectable()
export class ListHistoryService {
  constructor(private readonly repository: HistoryRepository) {}

  async run(_: ListHistoryRequest): Promise<HistoryResponse[]> {
    const list = await this.repository.all({
      order: {
        create: 'desc'
      }
    })

    return list.map((history) => new HistoryResponse(history))
  }
}
