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
    const { sub } = token

    return this.provider[Action.List].run({ id: sub })
  }

  @Post()
  add(@Body() request: AddFavRequest, @Auth() token: Token): Promise<AddFavResponse> {
    const { sub } = token

    return this.provider[Action.Add].run(request, { id: sub })
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param() request: RemoveFavRequest, @Auth() token: Token): Promise<void> {
    const { sub } = token

    return this.provider[Action.Remove].run(request, { id: sub })
  }
}
