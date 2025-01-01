import { Controller, Delete, HttpCode, HttpStatus, Param, Post } from '@nestjs/common'

import type { User } from '@/type/auth.type'

import { UserCurrent } from '@/decorator/user.current.decorator'

import { FavProvider } from './provider'

@Controller()
export class FavController {
  constructor(private readonly provider: FavProvider) {}

  @Post(':post')
  @HttpCode(HttpStatus.NO_CONTENT)
  add(@Param('post') post: string, @UserCurrent() user: User): Promise<void> {
    const { id } = user

    return this.provider.add.run(post, id)
  }

  @Delete(':post')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('post') post: string, @UserCurrent() user: User): Promise<void> {
    const { id } = user

    return this.provider.remove.run(post, id)
  }
}
