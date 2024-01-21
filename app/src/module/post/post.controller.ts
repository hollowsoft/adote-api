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

import {
  GetPostRequest,
  ListPostRequest,
  CreatePostRequest,
  UpdatePostParam,
  UpdatePostRequest,
  PublishPostParam,
  PublishPostRequest,
  RemovePostRequest
} from './post.request'

import { PostResponse, PublishPostResponse } from './post.response'

import { Action, PostProvider } from './post.provider'

@Controller('post')
export class PostController {
  constructor(private readonly provider: PostProvider) {}

  @Public()
  @Get()
  all(@Query() request: ListPostRequest): Promise<PostResponse[]> {
    return this.provider.action[Action.ListPost].run(request)
  }

  @Public()
  @Get(':id')
  get(@Param() request: GetPostRequest): Promise<PostResponse> {
    return this.provider.action[Action.GetPost].run(request)
  }

  @Post()
  create(
    @Body() request: CreatePostRequest,
    @Auth() token: Token
  ): Promise<PostResponse> {
    const { sub } = token

    return this.provider.action[Action.CreatePost].run(request, sub)
  }

  @Put(':id')
  update(
    @Param() param: UpdatePostParam,
    @Body() request: UpdatePostRequest,
    @Auth() token: Token
  ): Promise<PostResponse> {
    const { sub } = token

    return this.provider.action[Action.UpdatePost].run(param.id, request, sub)
  }

  @Put(':id/publish')
  publish(
    @Param() param: PublishPostParam,
    @Body() request: PublishPostRequest,
    @Auth() token: Token
  ): Promise<PublishPostResponse> {
    const { sub } = token

    return this.provider.action[Action.PublishPost].run(sub, request)
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param() request: RemovePostRequest, @Auth() token: Token): Promise<void> {
    const { sub } = token

    return this.provider.action[Action.RemovePost].run(request, sub)
  }
}
