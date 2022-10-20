import {
  Get,
  Post,
  Delete,
  Body,
  Query,
  Param,
  Controller
} from '@nestjs/common'

import { Auth } from '../../decorator/auth.decorator'

import { Token } from '../../type/token.type'

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
  create(@Body() request: CreatePostRequest, @Auth() token: Token): Promise<CreatePostResponse> {
    const { sub } = token

    return this.service.create(request, sub)
  }

  @Delete(':id')
  remove(@Param() request: RemovePostRequest): Promise<RemovePostResponse> {
    return this.service.remove(request)
  }
}
