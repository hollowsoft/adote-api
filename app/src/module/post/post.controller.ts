import {
  Get,
  Put,
  Post,
  Delete,
  Body,
  Query,
  Param,
  HttpCode,
  Controller
} from '@nestjs/common'

import { Token } from '../../type/token.type'

import { Auth } from '../../decorator/auth.decorator'
import { Public } from '../../decorator/public.decorator'

import { PostService } from './service/post.service'

import {
  GetPostRequest,
  ListPostRequest,
  CreatePostRequest,
  UpdatePostParam,
  UpdatePostRequest,
  PublishPostParam,
  PublishPostRequest,
  RemovePostRequest
} from './request'

import {
  PostResponse,
  PublishPostResponse
} from './response'

@Controller('post')
export class PostController {
  constructor(private readonly service: PostService) {}

  @Public()
  @Get()
  all(@Query() request: ListPostRequest): Promise<PostResponse[]> {
    return this.service.all(request)
  }

  @Public()
  @Get(':id')
  get(@Param() request: GetPostRequest): Promise<PostResponse> {
    return this.service.get(request)
  }

  @Post()
  create(@Body() request: CreatePostRequest, @Auth() token: Token): Promise<PostResponse> {
    const { sub } = token

    return this.service.create(request, sub)
  }

  @Put(':id')
  update(@Param() param: UpdatePostParam, @Body() request: UpdatePostRequest, @Auth() token: Token): Promise<PostResponse> {
    const { sub } = token

    return this.service.update(param, request, sub)
  }

  @Put(':id/publish')
  publish(@Param() param: PublishPostParam, @Body() request: PublishPostRequest, @Auth() token: Token): Promise<PublishPostResponse> {
    const { sub } = token

    return this.service.publish(param, request, sub)
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param() request: RemovePostRequest, @Auth() token: Token): Promise<void> {
    const { sub } = token

    return this.service.remove(request, sub)
  }
}
