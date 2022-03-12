import { Controller, Get, Query } from '@nestjs/common'

import { City } from './entity/city.entity'

import { LocationService } from './location.service'

@Controller('location')
export class LocationController {
  constructor(private readonly service: LocationService) {}

  @Get('search')
  search(@Query('term') term: string): Promise<City[]> {
    return this.service.find(term)
  }
}
