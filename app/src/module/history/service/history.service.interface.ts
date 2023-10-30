import { ListHistoryRequest } from '../request'

import { HistoryResponse } from '../response'

export interface IHistoryService {
  all(request: ListHistoryRequest): Promise<HistoryResponse[]>
}
