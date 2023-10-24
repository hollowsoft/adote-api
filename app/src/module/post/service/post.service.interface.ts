import {
  GetPostRequest,
  ListPostRequest,
  CreatePostRequest,
  UpdatePostParam,
  UpdatePostRequest,
  PublishPostParam,
  PublishPostRequest,
  RemovePostRequest,
} from '../request'

import { PostResponse, PublishPostResponse } from '../response'

export interface IPostService {
  get(request: GetPostRequest): Promise<PostResponse>

  all(request: ListPostRequest): Promise<PostResponse[]>

  create(request: CreatePostRequest, user: string): Promise<PostResponse>

  update(
    param: UpdatePostParam,
    request: UpdatePostRequest,
    user: string,
  ): Promise<PostResponse>

  publish(
    param: PublishPostParam,
    request: PublishPostRequest,
    user: string,
  ): Promise<PublishPostResponse>

  remove(request: RemovePostRequest, user: string): Promise<void>
}
