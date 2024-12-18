import { Body, Controller, Delete, HttpCode, HttpStatus, Param, Post } from '@nestjs/common'

import { UserToken } from '@/type/auth.type'

import { User } from '@/decorator/user.decorator'

import { AddFavRequest } from './fav.request'
import { FavProvider } from './provider'

@Controller('fav')
export class FavController {
  constructor(private readonly provider: FavProvider) {}

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  add(@Body() request: AddFavRequest, @User() token: UserToken): Promise<void> {
    const { user } = token

    return this.provider.add.run(request, user)
  }

  @Delete(':post')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('post') post: string, @User() token: UserToken): Promise<void> {
    const { user } = token

    return this.provider.remove.run(post, user)
  }
}
