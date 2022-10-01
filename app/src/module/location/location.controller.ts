import {
  Get,
  Query,
  Controller
} from '@nestjs/common'

import { LocationService } from './service/location.service'

import { SearchLocationRequest } from './request'
import { SearchLocationResponse } from './response'

@Controller('location')
export class LocationController {
  constructor(private readonly service: LocationService) {}

  @Get('search')
  search(@Query() request: SearchLocationRequest): Promise<SearchLocationResponse[]> {
    return this.service.search(request)
  }
}
