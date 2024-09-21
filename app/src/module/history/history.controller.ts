import { Controller, Get, Query } from '@nestjs/common'

import { ListHistoryRequest } from './history.request'
import { HistoryResponse } from './history.response'
import { HistoryProvider } from './provider'

@Controller('history')
export class HistoryController {
  constructor(private readonly provider: HistoryProvider) {}

  @Get()
  list(@Query() request: ListHistoryRequest): Promise<HistoryResponse[]> {
    return this.provider.list.run(request)
  }
}
