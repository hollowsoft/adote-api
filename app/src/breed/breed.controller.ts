import { Controller, Get, Query } from '@nestjs/common'

import { Kind } from './entity/kind.entity'
import { Breed } from './entity/breed.entity'

import { BreedService } from './breed.service'

@Controller('breed')
export class BreedController {
  constructor(private readonly service: BreedService) {}

  @Get()
  get(@Query('kind') kind: Kind): Promise<Breed[]> {
    return this.service.find(kind)
  }
}
