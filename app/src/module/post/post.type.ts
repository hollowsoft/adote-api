import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { HydratedDocument, Types } from 'mongoose'

import { Breed } from '@/module/breed/breed.type'

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
  breed: string
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
  user: string

  @Prop({ type: Types.ObjectId, ref: 'Location' })
  location: string

  @Prop(Boolean)
  publish: boolean
}

const schema = SchemaFactory.createForClass(Post)

export const PostSchema = { name: Post.name, schema }
