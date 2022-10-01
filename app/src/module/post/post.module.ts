import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Post } from './entity/post.entity'
import { PostRepository } from './post.repository'

import { PostService } from './service/post.service'
import { ListPostService } from './service/list.post.service'
import { CreatePostService } from './service/create.post.service'

import { PostController } from './post.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  providers: [
    PostRepository,
    PostService,
    ListPostService,
    CreatePostService
  ],
  controllers: [PostController]
})
export class PostModule {}
