import { Controller, Get } from '@nestjs/common'

import { Breed } from './entity/breed.entity'

@Controller('breed')
export class BreedController {
  @Get()
  get(): Breed[] {
    return []
  }
}
