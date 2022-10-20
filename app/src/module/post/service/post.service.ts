import { Injectable } from '@nestjs/common'

import { ListPostService } from './list.post.service'
import { CreatePostService } from './create.post.service'
import { RemovePostService } from './remove.post.service'

import {
  ListPostRequest,
  CreatePostRequest,
  RemovePostRequest
} from '../request'

import {
  ListPostResponse,
  CreatePostResponse,
  RemovePostResponse
} from '../response'

@Injectable()
export class PostService {
  constructor(
    private readonly LIST_POST_SERVICE: ListPostService,
    private readonly CREATE_POST_SERVICE: CreatePostService,
    private readonly REMOVE_POST_SERVICE: RemovePostService
  ) {}

  all(request: ListPostRequest): Promise<ListPostResponse[]> {
    return this.LIST_POST_SERVICE.run(request)
  }

  create(request: CreatePostRequest, user: string): Promise<CreatePostResponse> {
    return this.CREATE_POST_SERVICE.run(request, user)
  }

  remove(request: RemovePostRequest): Promise<RemovePostResponse> {
    return this.REMOVE_POST_SERVICE.run(request)
  }
}
