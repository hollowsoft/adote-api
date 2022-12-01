import { Injectable } from '@nestjs/common'

import { GetPostService } from './get.post.service'
import { ListPostService } from './list.post.service'
import { CreatePostService } from './create.post.service'
import { UpdatePostService } from './update.post.service'
import { PublishPostService } from './publish.post.service'
import { RemovePostService } from './remove.post.service'

import {
  GetPostRequest,
  ListPostRequest,
  CreatePostRequest,
  UpdatePostParam,
  UpdatePostRequest,
  PublishPostParam,
  PublishPostRequest,
  RemovePostRequest
} from '../request'

import {
  PostResponse,
  PublishPostResponse
} from '../response'

@Injectable()
export class PostService {
  constructor(
    private readonly GET_POST_SERVICE: GetPostService,
    private readonly LIST_POST_SERVICE: ListPostService,
    private readonly CREATE_POST_SERVICE: CreatePostService,
    private readonly UPDATE_POST_SERVICE: UpdatePostService,
    private readonly PUBLISH_POST_SERVICE: PublishPostService,
    private readonly REMOVE_POST_SERVICE: RemovePostService
  ) {}

  get(request: GetPostRequest): Promise<PostResponse> {
    return this.GET_POST_SERVICE.run(request)
  }

  all(request: ListPostRequest): Promise<PostResponse[]> {
    return this.LIST_POST_SERVICE.run(request)
  }

  create(request: CreatePostRequest, user: string): Promise<PostResponse> {
    return this.CREATE_POST_SERVICE.run(request, user)
  }

  update(param: UpdatePostParam, request: UpdatePostRequest, user: string): Promise<PostResponse> {
    return this.UPDATE_POST_SERVICE.run(param, request, user)
  }

  publish(param: PublishPostParam, request: PublishPostRequest, user: string): Promise<PublishPostResponse> {
    return this.PUBLISH_POST_SERVICE.run(param, request, user)
  }

  remove(request: RemovePostRequest, user: string): Promise<void> {
    return this.REMOVE_POST_SERVICE.run(request, user)
  }
}
