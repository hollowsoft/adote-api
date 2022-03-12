import { Controller, Get, Query } from '@nestjs/common'

import { City } from './entity/city.entity'

@Controller('location')
export class LocationController {
  @Get('search')
  search(@Query('term') term: string): City[] {
    return []
  }
}
