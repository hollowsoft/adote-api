import { Get, Query, Controller } from '@nestjs/common'

import { Role } from '@/module/user/user.type'
import { Permission } from '@/decorator/permission.decorator'

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
