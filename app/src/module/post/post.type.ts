import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { Document, HydratedDocument, Types } from 'mongoose'

import { BreedDocument } from '@/module/breed/breed.type'
import { UserDocument } from '../user/user.type'
import { Location, LocationDocument } from '../location/location.type'
import { CreatePostRequest } from './post.request'

export class CreatePost extends CreatePostRequest {}

export enum Size {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export enum Gender {
  Male = 'male',
  Female = 'female'
}

export class Pet {
  @Prop(String)
  name: string

  @Prop([Number, Number])
  age: [number, number]

  @Prop(Size)
  size: Size

  @Prop(Gender)
  gender: Gender

  @Prop({ type: Types.ObjectId, ref: 'Breed' })
  breed: BreedDocument
}

export type PostDocument = HydratedDocument<Post>
@Schema({ id: true, collection: 'Post' })
export class Post {
  @Prop(String)
  name: string

  @Prop(String)
  description: string

  @Prop([String])
  image: string[]

  @Prop(Pet)
  pet: Pet

  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: UserDocument

  @Prop({ type: Types.ObjectId, ref: 'Location' })
  location: LocationDocument

  @Prop(Boolean)
  publish: boolean
}

const schema = SchemaFactory.createForClass(Post)

export const PostSchema = { name: Post.name, schema }
