import { Get, Post, Delete, Body, Param, HttpCode, HttpStatus, Controller } from '@nestjs/common'

import { Auth } from '@/decorator/auth.decorator'
import { Token } from '@/type/token.type'

import { Action, FavProvider } from './provider'

import { AddFavRequest, RemoveFavRequest } from './fav.request'
import { FavResponse, AddFavResponse } from './fav.response'

@Controller('fav')
export class FavController {
  constructor(private readonly provider: FavProvider) {}

  @Get()
  list(@Auth() token: Token): Promise<FavResponse[]> {
    const { sub: id } = token

    return this.provider[Action.List].run(id)
  }

  @Post()
  add(@Auth() token: Token, @Body() request: AddFavRequest): Promise<AddFavResponse> {
    const { sub: id } = token

    return this.provider[Action.Add].run(request, id)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Auth() token: Token, @Param() request: RemoveFavRequest): Promise<void> {
    const { sub: id } = token

    return this.provider[Action.Remove].run(request, id)
  }
}
