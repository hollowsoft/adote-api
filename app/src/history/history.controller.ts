import { Controller, Get } from '@nestjs/common'

import { History } from './entity/history.entity'

@Controller('history')
export class HistoryController {
  @Get()
  get(): History {
    return null
  }
}
