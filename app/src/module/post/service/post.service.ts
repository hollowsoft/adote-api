import { Injectable } from '@nestjs/common'

import { ListPostService } from './list.post.service'
import { CreatePostService } from './create.post.service'

import {
  ListPostRequest,
  CreatePostRequest
} from '../request'

import {
  ListPostResponse,
  CreatePostResponse
} from '../response'

@Injectable()
export class PostService {
  constructor(
    private readonly LIST_POST_SERVICE: ListPostService,
    private readonly CREATE_POST_SERVICE: CreatePostService
  ) {}

  all(request: ListPostRequest): Promise<ListPostResponse[]> {
    return this.LIST_POST_SERVICE.run(request)
  }

  create(request: CreatePostRequest): Promise<CreatePostResponse> {
    return this.CREATE_POST_SERVICE.run(request)
  }
}
