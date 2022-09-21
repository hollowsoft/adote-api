import { Controller, Get, Query } from '@nestjs/common'

import { BreedService } from './breed.service'

import { GetBreedRequest } from './request/get.breed.request'
import { GetBreedResponse } from './response/get.breed.response'

@Controller('breed')
export class BreedController {
  constructor(private readonly service: BreedService) {}

  @Get()
  async get(@Query() request: GetBreedRequest): Promise<GetBreedResponse[]> {
    const { kind } = request

    const list = await this.service.get(kind)

    return list.map((breed) => new GetBreedResponse(breed))
  }
}
