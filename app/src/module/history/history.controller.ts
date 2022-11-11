import {
  Get,
  Query,
  Controller
} from '@nestjs/common'

import { Role } from '../user/entity/role.enum'
import { Permission } from '../../decorator/permission.decorator'

import { HistoryService } from './service/history.service'

import { ListHistoryRequest } from './request'
import { ListHistoryResponse } from './response'

@Controller('history')
export class HistoryController {
  constructor(private readonly service: HistoryService) {}

  @Get()
  @Permission(Role.ADMIN)
  all(@Query() request: ListHistoryRequest): Promise<ListHistoryResponse[]> {
    return this.service.all(request)
  }
}
