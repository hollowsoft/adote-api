import { FindManyOptions } from 'typeorm'

import { History } from './entity/history.entity'

export interface IHistoryRepository {
  all(option?: FindManyOptions<History>): Promise<History[]>
  save(history: History): Promise<History>
}
