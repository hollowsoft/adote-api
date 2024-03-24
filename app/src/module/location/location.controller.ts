import { Get, Query, Controller } from '@nestjs/common'

import { Public } from '@/decorator/public.decorator'

import { Action, LocationProvider } from './provider'

import { LocationResponse } from './location.response'
import { SearchLocationRequest } from './location.request'

@Controller('location')
export class LocationController {
  constructor(private readonly provider: LocationProvider) {}

  @Get('search')
  @Public()
  search(@Query() request: SearchLocationRequest): Promise<LocationResponse[]> {
    return this.provider[Action.Search].run(request)
  }
}
