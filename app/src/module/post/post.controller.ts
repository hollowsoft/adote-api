import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common'

import type { UserToken } from '@/type/auth.type'

import { Public } from '@/decorator/public.decorator'
import { User } from '@/decorator/user.decorator'

import { ListPostRequest, SavePostRequest, SavePublishPostRequest } from './post.request'
import { PostResponse } from './post.response'
import { PostProvider } from './provider'

@Controller('post')
export class PostController {
  constructor(private readonly provider: PostProvider) {}

  @Get()
  @Public()
  list(@Query() request: ListPostRequest): Promise<PostResponse[]> {
    return this.provider.list.run(request)
  }

  @Get(':id')
  @Public()
  get(@Param('id') id: string): Promise<PostResponse> {
    return this.provider.get.run(id)
  }

  @Post()
  create(@Body() request: SavePostRequest, @User() token: UserToken): Promise<PostResponse> {
    const { user } = token

    return this.provider.create.run(request, user)
  }

  @Put(':id')
  edit(
    @Param('id') id: string,
    @Body() request: SavePostRequest,
    @User() token: UserToken
  ): Promise<PostResponse> {
    const { user } = token

    return this.provider.save.run(id, request, user)
  }

  @Put(':id/publish')
  @HttpCode(HttpStatus.NO_CONTENT)
  publish(
    @Param('id') id: string,
    @Body() request: SavePublishPostRequest,
    @User() token: UserToken
  ): Promise<void> {
    const { user } = token

    return this.provider.publish.run(id, request, user)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string, @User() token: UserToken): Promise<void> {
    const { user } = token

    return this.provider.remove.run(id, user)
  }
}
