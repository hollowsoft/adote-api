import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { Document, HydratedDocument, Types } from 'mongoose'

import { Post } from '@/module/post/post.type'
import { Location } from '@/module/location/location.type'

export enum Role {
  Admin = 'admin',
  Member = 'member'
}

export type ContactDocument = Contact & Document
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

export type UserDocument = HydratedDocument<User>
@Schema({ id: true, collection: 'User' })
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
  contact?: ContactDocument

  @Prop({ type: Types.ObjectId, ref: 'Location' })
  location?: Location

  @Prop(Role)
  role: Role

  @Prop(Boolean)
  enable: boolean
}

export const schema = SchemaFactory.createForClass(User)

export const UserSchema = { name: User.name, schema }
