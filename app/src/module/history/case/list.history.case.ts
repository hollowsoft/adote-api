import { Injectable } from '@nestjs/common'

import { History } from '../entity/history.entity'
import { HistoryRepository } from '../history.repository'

@Injectable()
export class ListHistoryCase {
  constructor(private readonly repository: HistoryRepository) {}

  run(): Promise<History[]> {
    return this.repository.all({
      order: {
        create: 'desc'
      }
    })
  }
}
