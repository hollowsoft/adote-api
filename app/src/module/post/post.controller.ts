import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common'

import type { User } from '@/type/auth.type'

import { Public } from '@/decorator/public.decorator'
import { UserCurrent } from '@/decorator/user.current.decorator'

import {
  GetPostParam,
  ListPostRequest,
  RemovePostParam,
  SavePostParam,
  SavePostRequest,
  SavePublishPostParam,
  SavePublishPostRequest
} from './post.request'
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
  get(@Param() param: GetPostParam): Promise<PostResponse> {
    const { id } = param

    return this.provider.get.run(id)
  }

  @Post()
  create(@Body() request: SavePostRequest, @UserCurrent() user: User): Promise<PostResponse> {
    const { id } = user

    return this.provider.create.run(request, id)
  }

  @Put(':id')
  edit(
    @Param() param: SavePostParam,
    @Body() request: SavePostRequest,
    @UserCurrent() user: User
  ): Promise<PostResponse> {
    const { id } = param
    const { id: current } = user

    return this.provider.save.run(id, request, current)
  }

  @Put(':id/publish')
  @HttpCode(HttpStatus.NO_CONTENT)
  publish(
    @Param() param: SavePublishPostParam,
    @Body() request: SavePublishPostRequest,
    @UserCurrent() user: User
  ): Promise<void> {
    const { id } = param
    const { publish } = request
    const { id: current } = user

    return this.provider.publish.run(id, publish, current)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param() param: RemovePostParam, @UserCurrent() user: User): Promise<void> {
    const { id } = param
    const { id: current } = user

    return this.provider.remove.run(id, current)
  }
}
