import { Injectable } from '@nestjs/common'

import { ListPostService } from './list.post.service'
import { CreatePostService } from './create.post.service'
import { UpdatePostService } from './update.post.service'
import { RemovePostService } from './remove.post.service'

import {
  ListPostRequest,
  CreatePostRequest,
  UpdatePostParam,
  UpdatePostRequest,
  RemovePostRequest
} from '../request'

import {
  ListPostResponse,
  CreatePostResponse,
  UpdatePostResponse
} from '../response'

@Injectable()
export class PostService {
  constructor(
    private readonly LIST_POST_SERVICE: ListPostService,
    private readonly CREATE_POST_SERVICE: CreatePostService,
    private readonly UPDATE_POST_SERVICE: UpdatePostService,
    private readonly REMOVE_POST_SERVICE: RemovePostService
  ) {}

  all(request: ListPostRequest): Promise<ListPostResponse[]> {
    return this.LIST_POST_SERVICE.run(request)
  }

  create(request: CreatePostRequest, user: string): Promise<CreatePostResponse> {
    return this.CREATE_POST_SERVICE.run(request, user)
  }

  update(param: UpdatePostParam, request: UpdatePostRequest, user: string): Promise<UpdatePostResponse> {
    return this.UPDATE_POST_SERVICE.run(param, request, user)
  }

  remove(request: RemovePostRequest, user: string): Promise<void> {
    return this.REMOVE_POST_SERVICE.run(request, user)
  }
}
