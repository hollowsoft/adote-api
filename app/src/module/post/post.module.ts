import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Post } from './entity/post.entity'
import { PostRepository } from './post.repository'

import { PostService } from './service/post.service'
import { ListPostService } from './service/list.post.service'
import { CreatePostService } from './service/create.post.service'
import { UpdatePostService } from './service/update.post.service'
import { PublishPostService } from './service/publish.post.service'
import { RemovePostService } from './service/remove.post.service'

import { PostController } from './post.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  exports: [PostRepository],
  providers: [
    PostRepository,
    PostService,
    ListPostService,
    CreatePostService,
    UpdatePostService,
    PublishPostService,
    RemovePostService
  ],
  controllers: [PostController]
})
export class PostModule {}
