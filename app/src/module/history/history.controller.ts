import { Get, Query, Controller } from '@nestjs/common'

import { Role } from '../user/role.enum'
import { Permission } from '../../decorator/permission.decorator'

import { HistoryResponse } from './history.response'
import { ListHistoryRequest } from './history.request'

import { Action, HistoryProvider } from './provider/history.provider'

@Controller('history')
export class HistoryController {
  constructor(private readonly provider: HistoryProvider) {}

  @Get()
  @Permission(Role.Admin)
  all(@Query() request: ListHistoryRequest): Promise<HistoryResponse[]> {
    return this.provider.action[Action.ListHistory].run(request)
  }
}
