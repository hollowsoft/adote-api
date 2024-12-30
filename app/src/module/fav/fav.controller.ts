import { Controller, Delete, HttpCode, HttpStatus, Param, Post } from '@nestjs/common'

import type { UserToken } from '@/type/auth.type'

import { User } from '@/decorator/user.decorator'

import { FavProvider } from './provider'

@Controller('fav')
export class FavController {
  constructor(private readonly provider: FavProvider) {}

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  add(@Param() post: string, @User() token: UserToken): Promise<void> {
    const {
      user: { id }
    } = token

    return this.provider.add.run(post, id)
  }

  @Delete(':post')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('post') post: string, @User() token: UserToken): Promise<void> {
    const {
      user: { id }
    } = token

    return this.provider.remove.run(post, id)
  }
}
