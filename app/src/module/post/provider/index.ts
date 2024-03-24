import { Injectable } from '@nestjs/common'

import { GetPost } from './get.post'
import { ListPost } from './list.post'
import { CreatePost } from './create.post'
import { PatchPost } from './patch.post'
import { PublishPost } from './publish.post'
import { RemovePost } from './remove.post'

export enum Action {
  Get,
  List,
  Create,
  Patch,
  Publish,
  Remove
}

@Injectable()
export class PostProvider {
  action: [GetPost, ListPost, CreatePost, PatchPost, PublishPost, RemovePost]

  constructor(
    private readonly get: GetPost,
    private readonly list: ListPost,
    private readonly create: CreatePost,
    private readonly patch: PatchPost,
    private readonly publish: PublishPost,
    private readonly remove: RemovePost
  ) {
    this.action = [this.get, this.list, this.create, this.patch, this.publish, this.remove]
  }
}
