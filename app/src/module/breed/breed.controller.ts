import {
  Get,
  Query,
  Controller
} from '@nestjs/common'

import { Public } from '../../decorator/public.decorator'

import { BreedService } from './service/breed.service'

import { ListBreedRequest } from './request'

import { BreedResponse } from './response'

@Controller('breed')
export class BreedController {
  constructor(private readonly service: BreedService) {}

  @Public()
  @Get()
  all(@Query() request: ListBreedRequest): Promise<BreedResponse[]> {
    return this.service.all(request)
  }
}
