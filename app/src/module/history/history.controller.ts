import {
  Get,
  Query,
  Controller
} from '@nestjs/common'

import { HistoryService } from './service/history.service'

import { ListHistoryRequest } from './request'
import { ListHistoryResponse } from './response'

@Controller('history')
export class HistoryController {
  constructor(private readonly service: HistoryService) {}

  @Get()
  all(@Query() request: ListHistoryRequest): Promise<ListHistoryResponse[]> {
    return this.service.all(request)
  }
}
