import { Get, Put, Post, Delete, Body, Param, Query, HttpCode, Controller } from '@nestjs/common'

import { Auth } from '@/decorator/auth.decorator'
import { Public } from '@/decorator/public.decorator'

import { Token } from '@/type/token.type'

import { Action, PostProvider } from './provider'

import { ListPostRequest, CreatePostRequest, PatchPostRequest, PublishPostRequest } from './post.request'

import { PostResponse, PublishPostResponse } from './post.response'

@Controller('post')
export class PostController {
  constructor(private readonly provider: PostProvider) {}

  @Get()
  @Public()
  list(@Query() request: ListPostRequest): Promise<PostResponse[]> {
    return this.provider.action[Action.List].run(request)
  }

  @Get(':id')
  @Public()
  get(@Param('id') id: string): Promise<PostResponse> {
    return this.provider.action[Action.Get].run(id)
  }

  @Post()
  create(@Auth() token: Token, @Body() request: CreatePostRequest): Promise<PostResponse> {
    const { sub: id } = token

    return this.provider.action[Action.Create].run(request, id)
  }

  @Put(':id')
  patch(@Param('id') id: string, @Auth() token: Token, @Body() request: PatchPostRequest): Promise<PostResponse> {
    const { sub } = token

    return this.provider.action[Action.Patch].run(id, request, sub)
  }

  @Put(':id/publish')
  publish(
    @Param('id') id: string,
    @Auth() token: Token,
    @Body() request: PublishPostRequest
  ): Promise<PublishPostResponse> {
    const { sub } = token

    return this.provider.action[Action.Publish].run(id, request)
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string, @Auth() token: Token): Promise<void> {
    const { sub } = token

    return this.provider.action[Action.Remove].run(id, { id: sub })
  }
}
