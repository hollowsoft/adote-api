import {
  Get,
  Post,
  Delete,
  Body,
  Query,
  Param,
  Controller
} from '@nestjs/common'

import { PostService } from './service/post.service'

import {
  ListPostRequest,
  CreatePostRequest,
  RemovePostRequest
} from './request'

import {
  ListPostResponse,
  CreatePostResponse,
  RemovePostResponse
} from './response'

@Controller('post')
export class PostController {
  constructor(private readonly service: PostService) {}

  @Get()
  all(@Query() request: ListPostRequest): Promise<ListPostResponse[]> {
    return this.service.all(request)
  }

  @Post()
  create(@Body() request: CreatePostRequest): Promise<CreatePostResponse> {
    return this.service.create(request)
  }

  @Delete(':id')
  remove(@Param() request: RemovePostRequest): Promise<RemovePostResponse> {
    return this.service.remove(request)
  }
}
