import {
  Get,
  Controller
} from '@nestjs/common'

import { HistoryService } from './history.service'

import { ListHistoryResponse } from './response/list.history.response'

@Controller('history')
export class HistoryController {
  constructor(private readonly service: HistoryService) {}

  @Get()
  async all(): Promise<ListHistoryResponse[]> {
    const list = await this.service.all()

    return list.map((history) => new ListHistoryResponse(history))
  }
}
