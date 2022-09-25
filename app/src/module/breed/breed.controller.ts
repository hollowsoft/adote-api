import {
  Get,
  Query,
  Controller
} from '@nestjs/common'

import { BreedService } from './breed.service'

import { ListBreedRequest } from './request/list.breed.request'
import { ListBreedResponse } from './response/list.breed.response'

@Controller('breed')
export class BreedController {
  constructor(private readonly service: BreedService) {}

  @Get()
  async all(@Query() request: ListBreedRequest): Promise<ListBreedResponse[]> {
    const { kind } = request

    const list = await this.service.all(kind)

    return list.map((breed) => new ListBreedResponse(breed))
  }
}
