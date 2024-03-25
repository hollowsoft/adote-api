import { Get, Query, Controller } from '@nestjs/common'

import { Action, HistoryProvider } from './provider'

import { ListHistoryRequest } from './history.request'
import { HistoryResponse } from './history.response'

@Controller('history')
export class HistoryController {
  constructor(private readonly provider: HistoryProvider) {}

  @Get()
  list(@Query() request: ListHistoryRequest): Promise<HistoryResponse[]> {
    return this.provider.action[Action.List].run(request)
  }
}
