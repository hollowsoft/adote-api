import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { HydratedDocument, Types } from 'mongoose'

import { LocationDocument } from '@/module/location/repository/location.schema'
import { Post } from '@/module/post/repository/post.schema'

import { Role } from '../type/role.enum'

export type UserDocument = HydratedDocument<User>

@Schema({ id: true, collection: 'Contact' })
export class Contact {
  @Prop(String)
  id: string

  @Prop(String)
  mail?: string

  @Prop(String)
  phone?: string

  @Prop(String)
  social?: string
}

@Schema({ id: true, collection: 'User' })
export class User {
  @Prop({ type: String, unique: true, required: true })
  mail: string

  @Prop(String)
  name?: string

  @Prop(String)
  image?: string

  @Prop(String)
  description?: string

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Post' }], default: [] })
  fav: Post[] = []

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Post' }], default: [] })
  post: Post[] = []

  @Prop({ type: Types.ObjectId, ref: 'Contact' })
  contact?: Contact

  @Prop({ type: Types.ObjectId, ref: 'Location' })
  location?: LocationDocument

  @Prop({ type: String, enum: Role, default: Role.MEMBER })
  role: Role = Role.MEMBER

  @Prop({ type: Boolean, default: true })
  enable: boolean = true
}

export const UserSchema = SchemaFactory.createForClass(User)
