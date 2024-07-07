import { Get, Post, Delete, Body, Param, HttpCode, HttpStatus, Controller } from '@nestjs/common'

import { FavProvider } from './provider'

import { AddFavRequest, RemoveFavRequest } from './fav.request'
import { FavResponse, AddFavResponse } from './fav.response'

@Controller('fav')
export class FavController {
  constructor(private readonly provider: FavProvider) {}

  @Get()
  list(): Promise<FavResponse[]> {
    return this.provider.list.run()
  }

  @Post()
  add(@Body() request: AddFavRequest): Promise<AddFavResponse> {
    return this.provider.add.run(request)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param() request: RemoveFavRequest): Promise<void> {
    return this.provider.remove.run(request)
  }
}
