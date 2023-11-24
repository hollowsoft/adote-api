import { Get, Query, Controller } from '@nestjs/common'

import { Role } from '../user/role.enum'
import { Permission } from '../../decorator/permission.decorator'

import { HistoryService } from './service/history.service'

import { ListHistoryRequest } from './request'

import { HistoryResponse } from './response'

@Controller('history')
export class HistoryController {
  constructor(private readonly service: HistoryService) {}

  @Get()
  @Permission(Role.Admin)
  all(@Query() request: ListHistoryRequest): Promise<HistoryResponse[]> {
    return this.service.all(request)
  }
}
