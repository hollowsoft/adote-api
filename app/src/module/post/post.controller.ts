import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common'

import type { UserToken } from '@/type/auth.type'

import { Public } from '@/decorator/public.decorator'
import { User } from '@/decorator/user.decorator'

import { CreatePostRequest, ListPostRequest, PatchPostRequest, PublishPostRequest } from './post.request'
import { PostResponse, PublishPostResponse } from './post.response'
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
  create(@Body() request: CreatePostRequest, @User() token: UserToken): Promise<PostResponse> {
    const { user } = token

    return this.provider.create.run(request, user.id)
  }

  @Put(':id')
  patch(@Param('id') id: string, @Body() request: PatchPostRequest): Promise<PostResponse> {
    return this.provider.patch.run(id, request)
  }

  @Put(':id/publish')
  publish(@Param('id') id: string, @Body() request: PublishPostRequest): Promise<PublishPostResponse> {
    return this.provider.publish.run(id, request)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string, @User() token: UserToken): Promise<void> {
    const { user } = token

    return this.provider.remove.run(id, user.id)
  }
}
