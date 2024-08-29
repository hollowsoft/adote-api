import { Get, Post, Delete, Body, Param, HttpCode, HttpStatus, Controller } from '@nestjs/common'

import { Auth } from '@/decorator/auth.decorator'

import { Token } from '@/type/auth.type'

import { FavProvider } from './provider'

import { AddFavRequest, RemoveFavRequest } from './fav.request'
import { FavResponse } from './fav.response'

@Controller('fav')
export class FavController {
  constructor(private readonly provider: FavProvider) {}

  @Get()
  list(): Promise<FavResponse[]> {
    return this.provider.list.run()
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  add(@Body() request: AddFavRequest, @Auth() token: Token): Promise<void> {
    const { user } = token

    return this.provider.add.run(request, user)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param() request: RemoveFavRequest): Promise<void> {
    return this.provider.remove.run(request)
  }
}
