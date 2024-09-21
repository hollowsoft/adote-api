import { Controller, Get, Query } from '@nestjs/common'

import { Public } from '@/decorator/public.decorator'

import { SearchLocationRequest } from './location.request'
import { LocationResponse } from './location.response'
import { LocationProvider } from './provider'

@Controller('location')
export class LocationController {
  constructor(private readonly provider: LocationProvider) {}

  @Get('search')
  @Public()
  search(@Query() request: SearchLocationRequest): Promise<LocationResponse[]> {
    return this.provider.search.run(request)
  }
}
