import {
  Get,
  Query,
  Controller
} from '@nestjs/common'

import { Public } from '../../decorator/public.decorator'

import { LocationService } from './service/location.service'

import { SearchLocationRequest } from './request'

import { LocationResponse } from './response'

@Controller('location')
export class LocationController {
  constructor(private readonly service: LocationService) {}

  @Public()
  @Get('search')
  search(@Query() request: SearchLocationRequest): Promise<LocationResponse[]> {
    return this.service.search(request)
  }
}
