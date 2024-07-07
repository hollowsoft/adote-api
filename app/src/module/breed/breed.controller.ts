import { Get, Query, Controller } from '@nestjs/common'

import { Public } from '@/decorator/public.decorator'

import { BreedProvider } from './provider'

import { ListBreedRequest } from './breed.request'
import { BreedResponse } from './breed.response'

@Controller('breed')
export class BreedController {
  constructor(private readonly provider: BreedProvider) {}

  @Get()
  @Public()
  list(@Query() request: ListBreedRequest): Promise<BreedResponse[]> {
    return this.provider.list.run(request)
  }
}
