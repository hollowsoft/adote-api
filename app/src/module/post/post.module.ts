import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Post } from './entity/post.entity'
import { PostRepository } from './post.repository'

import { PostService } from './post.service'
import { ListPostCase } from './case/list.post.case'
import { CreatePostCase } from './case/create.post.case'

import { PostController } from './post.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  providers: [
    PostService,
    PostRepository,
    ListPostCase,
    CreatePostCase
  ],
  controllers: [PostController]
})
export class PostModule {}
