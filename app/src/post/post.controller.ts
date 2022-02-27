import { Controller, Get } from '@nestjs/common'

import { Post } from './entity/post.entity'

@Controller('post')
export class PostController {
  @Get()
  get(): Post[] {
    return []
  }
}
