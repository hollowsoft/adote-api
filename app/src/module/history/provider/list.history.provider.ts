import { Injectable } from '@nestjs/common'

import { HistoryRepository } from '../history.repository'
import { ListHistoryRequest } from '../history.request'
import { HistoryResponse } from '../history.response'

@Injectable()
export class ListHistoryProvider {
  constructor(private readonly repository: HistoryRepository) {}

  async run(request: ListHistoryRequest): Promise<HistoryResponse[]> {
    const list = await this.repository.list({})

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
