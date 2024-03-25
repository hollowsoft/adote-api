import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { PostSchema } from './post.type'
import { PostRepository } from './post.repository'

import { GetPost, ListPost, CreatePost, PatchPost, PublishPost, RemovePost, PostProvider } from './provider'

import { PostController } from './post.controller'

@Module({
  imports: [MongooseModule.forFeature([PostSchema])],
  providers: [GetPost, ListPost, CreatePost, PatchPost, PublishPost, RemovePost, PostProvider, PostRepository],
  controllers: [PostController]
})
export class PostModule {}
