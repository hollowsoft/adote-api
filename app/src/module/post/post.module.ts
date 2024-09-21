import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { PostController } from './post.controller'
import { PostProvider } from './provider'
import { PostRepository } from './repository/post.repository'
import { Post, PostSchema } from './repository/post.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }])],
  providers: [PostProvider, PostRepository],
  controllers: [PostController]
})
export class PostModule {}
