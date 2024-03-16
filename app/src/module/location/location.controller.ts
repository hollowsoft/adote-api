import { Get, Query, Controller } from '@nestjs/common'

import { Public } from 'src/decorator/public.decorator'

import { LocationResponse } from './location.response'
import { SearchLocationRequest } from './location.request'

import { Action, LocationProvider } from './location.provider'

@Controller('location')
export class LocationController {
  constructor(private readonly provider: LocationProvider) {}

  @Public()
  @Get('search')
  search(@Query() request: SearchLocationRequest): Promise<LocationResponse[]> {
    return this.provider[Action.SearchLocation].run(request)
  }
}
