import {
  Get,
  Post,
  Body,
  Query,
  Controller
} from '@nestjs/common'

import { PostService } from './service/post.service'

import { ListPostRequest } from './request/list.post.request'
import { ListPostResponse } from './response/list.post.response'

import { CreatePostRequest } from './request/create.post.request'
import { CreatePostResponse } from './response/create.post.response'

@Controller('post')
export class PostController {
  constructor(private readonly service: PostService) {}

  @Get()
  async all(@Query() request: ListPostRequest): Promise<ListPostResponse> {
    const { size } = request

    const list = await this.service.all()

    return list.map((post) => new ListPostResponse(post))
  }

  @Post()
  async create(@Body() request: CreatePostRequest): Promise<CreatePostResponse> {
    const { title } = request

    const post = await this.service.create()

    return new CreatePostResponse(post)
  }
}
