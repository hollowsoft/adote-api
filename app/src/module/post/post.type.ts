import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { Types } from 'mongoose'

import { User } from '@/module/user/user.type'
import { Breed } from '@/module/breed/breed.type'
import { Location } from '@/module/location/location.type'

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
  breed: Breed
}

@Schema({ id: true, collection: 'Post' })
export class Post {
  @Prop(String)
  name: string

  @Prop(String)
  description: string

  @Prop([String])
  image: string[]

  @Prop({ type: Types.ObjectId, ref: 'Pet' })
  pet: Pet

  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: User

  @Prop({ type: Types.ObjectId, ref: 'Location' })
  location: Location

  @Prop(Boolean)
  publish: boolean
}

const schema = SchemaFactory.createForClass(Post)

export const PostSchema = { name: Post.name, schema }
