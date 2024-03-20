import { Types } from 'mongoose'

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { User } from '@/module/user/user.entity'
import { Post } from '@/module/post/post.entity'

@Schema()
export class Fav {
  @Prop({ type: Types.ObjectId, ref: 'Post' })
  post: Post

  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: User
}

export const FavSchema = SchemaFactory.createForClass(Fav)
