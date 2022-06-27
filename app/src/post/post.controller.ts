import { Controller, Get } from '@nestjs/common'

import { Post } from './entity/post.entity'

import { PostService } from './post.service'

@Controller('post')
export class PostController {
  constructor(private readonly service: PostService) {}

  @Get()
  get(): Promise<Post[]> {
    return this.service.find()
  }
}
