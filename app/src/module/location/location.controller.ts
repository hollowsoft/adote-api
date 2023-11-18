import { Inject, Get, Query, Controller } from '@nestjs/common'

import { Public } from 'src/decorator/public.decorator'

import { LocationResponse } from './location.response'
import { SearchLocationRequest } from './location.request'

import { Provider, LocationProvider } from './provider'

@Controller('location')
export class LocationController {
  constructor(@Inject() private readonly provider: LocationProvider) {}

  @Public()
  @Get('search')
  search(@Query() request: SearchLocationRequest): Promise<LocationResponse[]> {
    return this.provider[Provider.SearchLocation].run(request)
  }
}
