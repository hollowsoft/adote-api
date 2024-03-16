import { Get, Query, Controller } from '@nestjs/common'

import { Public } from '../../decorator/public.decorator'

import { BreedResponse } from './breed.response'
import { ListBreedRequest } from './list.breed.request'

import { Action, BreedProvider } from './breed.provider'

@Controller('breed')
export class BreedController {
  constructor(private readonly provider: BreedProvider) {}

  @Public()
  @Get()
  all(@Query() request: ListBreedRequest): Promise<BreedResponse[]> {
    return this.provider[Action.ListBreed].run(request)
  }
}
