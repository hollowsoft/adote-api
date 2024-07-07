import { Get, Put, Post, Delete, Body, Param, Query, HttpCode, HttpStatus, Controller } from '@nestjs/common'

import { Public } from '@/decorator/public.decorator'

import { PostProvider } from './provider'

import { ListPostRequest, CreatePostRequest, PatchPostRequest, PublishPostRequest } from './post.request'
import { PostResponse, PublishPostResponse } from './post.response'

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
    return this.provider.GetPost.run(id)
  }

  @Post()
  create(@Body() request: CreatePostRequest): Promise<PostResponse> {
    return this.provider.create.run(request)
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
  remove(@Param('id') id: string): Promise<void> {
    return this.provider.remove.run(id)
  }
}
