import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common'

import { Token } from '@/type/auth.type'

import { Auth } from '@/decorator/auth.decorator'

import { AddFavRequest, RemoveFavRequest } from './fav.request'
import { FavResponse } from './fav.response'
import { FavProvider } from './provider'

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
  remove(@Param('id') id: string, @Auth() token: Token): Promise<void> {
    const { user } = token

    return this.provider.remove.run(request, user)
  }
}
