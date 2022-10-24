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
  GetPostResponse,
  ListPostResponse,
  CreatePostResponse,
  UpdatePostResponse,
  PublishPostResponse
} from './response'

@Controller('post')
export class PostController {
  constructor(private readonly service: PostService) {}

  @Public()
  @Get(':id')
  get(@Param() request: GetPostRequest): Promise<GetPostResponse> {
    return this.service.get(request)
  }

  @Public()
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

  @Put(':id/publish')
  publish(@Param() param: PublishPostParam, @Body() request: PublishPostRequest, @Auth() token: Token): Promise<PublishPostResponse> {
    const { sub } = token

    return this.service.publish(param, request, sub)
  }

  @Delete(':id')
  remove(@Param() request: RemovePostRequest, @Auth() token: Token): Promise<void> {
    const { sub } = token

    return this.service.remove(request, sub)
  }
}
