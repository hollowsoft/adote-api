import { Injectable } from '@nestjs/common'

import { HistoryResponse } from '../history.response'
import { ListHistoryRequest } from '../history.request'

import { HistoryRepository } from '../history.repository'

@Injectable()
export class ListHistory {
  constructor(private readonly repository: HistoryRepository) {}

  async run(request: ListHistoryRequest): Promise<HistoryResponse[]> {
    const list = await this.repository.list()

    return list.map((history) => ({
      id: '',
      name: history.name,
      image: history.image,
      age: history.age,
      size: history.size,
      gender: history.gender,
      breed: history.breed
    }))
  }
}
