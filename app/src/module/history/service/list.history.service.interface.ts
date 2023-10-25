import { ListHistoryRequest } from '../request'

import { HistoryResponse } from '../response'

export interface IListHistoryService {
  run(_: ListHistoryRequest): Promise<HistoryResponse[]>
}
