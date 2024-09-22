import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common'

import { UserToken } from '@/type/auth.type'

import { User } from '@/decorator/user.decorator'

import { AddFavRequest } from './fav.request'
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
  add(@Body() request: AddFavRequest, @User() token: UserToken): Promise<void> {
    const { user } = token

    return this.provider.add.run(request, user)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string, @User() token: UserToken): Promise<void> {
    const { user } = token

    return this.provider.remove.run(id, user)
  }
}
