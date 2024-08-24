import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { Post, PostSchema } from './repository/post.schema'
import { PostRepository } from './repository/post.repository'

import { PostProvider } from './provider'
import { PostController } from './post.controller'

@Module({
  imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }])],
  providers: [PostProvider, PostRepository],
  controllers: [PostController]
})
export class PostModule {}
