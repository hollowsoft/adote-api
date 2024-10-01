import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { HydratedDocument, Types } from 'mongoose'

import { LocationDocument } from '@/module/location/repository/location.schema'
import { Post } from '@/module/post/repository/post.schema'

import { Role } from '../type/role.enum'

export type UserDocument = HydratedDocument<User>

export class Contact {
  @Prop({ type: String, required: true })
  mail: string

  @Prop({ type: String })
  phone?: string

  @Prop({ type: String })
  social?: string
}

@Schema({ id: true, collection: 'User' })
export class User {
  @Prop({ type: String, unique: true, required: true })
  mail: string

  @Prop({ type: String })
  name?: string

  @Prop({ type: String })
  image?: string

  @Prop({ type: String })
  description?: string

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Post' }], default: [] })
  fav: Post[] = []

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Post' }], default: [] })
  post: Post[] = []

  @Prop({ type: Contact, required: true })
  contact: Contact

  @Prop({ type: Types.ObjectId, ref: 'Location' })
  location?: LocationDocument

  @Prop({ type: String, enum: Role, default: Role.MEMBER })
  role: Role = Role.MEMBER

  @Prop({ type: Boolean, default: true })
  enable: boolean = true
}

export const UserSchema = SchemaFactory.createForClass(User)
