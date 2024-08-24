import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { Types, HydratedDocument } from 'mongoose'

import { Post } from '@/module/post/repository/post.schema'
import { Location } from '@/module/location/location.type'

export type UserDocument = HydratedDocument<User>

export enum Role {
  Admin = 'admin',
  Member = 'member'
}

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
  location?: Location

  @Prop({ type: String, enum: Role, default: Role.Member })
  role: Role = Role.Member

  @Prop({ type: Boolean, default: true })
  enable: boolean = true
}

export const schema = SchemaFactory.createForClass(User)

export const UserSchema = { name: User.name, schema }
