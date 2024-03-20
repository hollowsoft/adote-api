import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { Types } from 'mongoose'

import { Post } from '@/module/post/post.entity'
import { User } from '@/module/user/user.entity'

@Schema()
export class Fav {
  @Prop({ type: Types.ObjectId, ref: 'Post' })
  post: Post

  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: User
}

export const FavSchema = SchemaFactory.createForClass(Fav)
