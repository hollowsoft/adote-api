import {
  Post,
  Body,
  Controller
} from '@nestjs/common'

import { Auth } from '../../decorator/auth.decorator'
import { Token } from '../../type/token.type'

import { FavService } from './service/fav.service'

import { AddFavRequest } from './request'

import { AddFavResponse } from './response'

@Controller('fav')
export class FavController {
  constructor(private readonly service: FavService) {}

  @Post()
  add(@Body() request: AddFavRequest, @Auth() token: Token): Promise<AddFavResponse> {
    const { sub } = token

    return this.service.add(request, sub)
  }
}
