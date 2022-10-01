import {
  Get,
  Query,
  Controller
} from '@nestjs/common'

import { BreedService } from './service/breed.service'

import { ListBreedRequest } from './request'
import { ListBreedResponse } from './response'

@Controller('breed')
export class BreedController {
  constructor(private readonly service: BreedService) {}

  @Get()
  all(@Query() request: ListBreedRequest): Promise<ListBreedResponse[]> {
    return this.service.all(request)
  }
}
