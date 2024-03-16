import { Get, Post, Delete, Body, Param, HttpCode, Controller } from '@nestjs/common'

import { Auth } from '../../decorator/auth.decorator'
import { Token } from '../../type/token.type'

import { FavResponse, AddFavResponse } from './fav.response'
import { AddFavRequest, RemoveFavRequest } from './fav.request'

import { Action, FavProvider } from './fav.provider'

@Controller('fav')
export class FavController {
  constructor(private readonly provider: FavProvider) {}

  @Get()
  all(@Auth() token: Token): Promise<FavResponse[]> {
    const { sub } = token

    return this.provider[Action.ListFav].run(sub)
  }

  @Post()
  add(@Body() request: AddFavRequest, @Auth() token: Token): Promise<AddFavResponse> {
    const { sub } = token

    return this.provider[Action.AddFav].run(request, sub)
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param() request: RemoveFavRequest, @Auth() token: Token): Promise<void> {
    const { sub } = token

    return this.provider[Action.RemoveFav].run(request, sub)
  }
}
