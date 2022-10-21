import {
  Get,
  Put,
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
  UpdatePostParam,
  UpdatePostRequest,
  RemovePostRequest
} from './request'

import {
  ListPostResponse,
  CreatePostResponse,
  UpdatePostResponse,
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

  @Put(':id')
  update(@Param() param: UpdatePostParam, @Body() request: UpdatePostRequest, @Auth() token: Token): Promise<UpdatePostResponse> {
    const { sub } = token

    return this.service.update(param, request, sub)
  }

  @Delete(':id')
  remove(@Param() request: RemovePostRequest): Promise<RemovePostResponse> {
    return this.service.remove(request)
  }
}
