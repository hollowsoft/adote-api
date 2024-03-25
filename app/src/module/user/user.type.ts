import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { Types } from 'mongoose'

import { Post } from '@/module/post/post.type'
import { Location } from '@/module/location/location.type'

export enum Role {
  Admin = 'admin',
  Member = 'member'
}

@Schema()
export class Contact {
  @Prop(String)
  mail?: string

  @Prop(String)
  phone?: string

  @Prop(String)
  social?: string
}

@Schema()
export class User {
  @Prop(String)
  mail: string

  @Prop(String)
  name?: string

  @Prop(String)
  image?: string

  @Prop(String)
  description?: string

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Post' }] })
  fav: Post[]

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Post' }] })
  post: Post[]

  @Prop({ type: Types.ObjectId, ref: 'Contact' })
  contact?: Contact

  @Prop({ type: Types.ObjectId, ref: 'Location' })
  location?: Location

  @Prop(Role)
  role: Role

  @Prop(Boolean)
  enable: boolean
}

const schema = SchemaFactory.createForClass(User)

export const UserSchema = { name: User.name, schema }
