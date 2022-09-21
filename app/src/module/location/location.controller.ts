import { Controller, Get, Query } from '@nestjs/common'

import { LocationService } from './location.service'

import { SearchLocationRequest } from './request/search.location.request'
import { SearchLocationResponse } from './response/search.location.response'

@Controller('location')
export class LocationController {
  constructor(private readonly service: LocationService) {}

  @Get('search')
  async search(@Query() request: SearchLocationRequest): Promise<SearchLocationResponse[]> {
    const { term } = request

    const list = await this.service.search(term)

    return list.map((city) => new SearchLocationResponse(city))
  }
}
