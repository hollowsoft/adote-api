import {
  Post,
  Delete,
  Body,
  Param,
  Controller
} from '@nestjs/common'

import { Auth } from '../../decorator/auth.decorator'
import { Token } from '../../type/token.type'

import { FavService } from './service/fav.service'

import {
  AddFavRequest,
  RemoveFavRequest
} from './request'

import { AddFavResponse } from './response'

@Controller('fav')
export class FavController {
  constructor(private readonly service: FavService) {}

  @Post()
  add(@Body() request: AddFavRequest, @Auth() token: Token): Promise<AddFavResponse> {
    const { sub } = token

    return this.service.add(request, sub)
  }

  @Delete(':id')
  remove(@Param() request: RemoveFavRequest, @Auth() token: Token): Promise<void> {
    const { sub } = token

    return this.service.remove(request, sub)
  }
}
