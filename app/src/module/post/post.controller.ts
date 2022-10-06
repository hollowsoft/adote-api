import {
  Get,
  Query,
  Post,
  Body,
  Controller
} from '@nestjs/common'

import { PostService } from './service/post.service'

import {
  ListPostRequest,
  CreatePostRequest
} from './request'

import {
  ListPostResponse,
  CreatePostResponse
} from './response'

@Controller('post')
export class PostController {
  constructor(private readonly service: PostService) {}

  @Get()
  all(@Query() request: ListPostRequest): Promise<ListPostResponse> {
    return this.service.all(request)
  }

  @Post()
  create(@Body() request: CreatePostRequest): Promise<CreatePostResponse> {
    return this.service.create(request)
  }
}
