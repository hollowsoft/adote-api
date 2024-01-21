import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Post } from './post.entity'
import { PostRepository } from './post.repository'

import { PostProvider } from './post.provider'

import { PostController } from './post.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  exports: [PostRepository],
  providers: [PostProvider, PostRepository],
  controllers: [PostController]
})
export class PostModule {}
