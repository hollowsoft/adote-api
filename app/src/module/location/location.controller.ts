import { Get, Query, Controller } from '@nestjs/common'

import { Public } from '@/decorator/public.decorator'

import { LocationProvider } from './provider'

import { SearchLocationRequest } from './location.request'
import { LocationResponse } from './location.response'

@Controller('location')
export class LocationController {
  constructor(private readonly provider: LocationProvider) {}

  @Get('search')
  @Public()
  search(@Query() request: SearchLocationRequest): Promise<LocationResponse[]> {
    return this.provider.search.run(request)
  }
}
