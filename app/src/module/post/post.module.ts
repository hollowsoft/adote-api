import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { PostSchema } from './post.type'
import { PostRepository } from './post.repository'

import { PostProvider } from './provider'
import { PostController } from './post.controller'

@Module({
  imports: [MongooseModule.forFeature([PostSchema])],
  providers: [PostProvider, PostRepository],
  controllers: [PostController]
})
export class PostModule {}
