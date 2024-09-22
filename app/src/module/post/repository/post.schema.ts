import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { HydratedDocument, Types } from 'mongoose'

import { Breed, BreedDocument } from '@/module/breed/repository/breed.schema'
import { Location, LocationDocument } from '@/module/location/repository/location.schema'
import { User, UserDocument } from '@/module/user/repository/user.schema'

import { Gender } from '../type/gender.enum'
import { Size } from '../type/size.enum'

export type PostDocument = HydratedDocument<Post>

export class Pet {
  @Prop({ type: String, required: true })
  name: string

  @Prop({ type: Number, required: true })
  age: number

  @Prop({ type: String, enum: Size, required: true })
  size: Size

  @Prop({ type: String, enum: Gender, required: true })
  gender: Gender

  @Prop({ type: Types.ObjectId, ref: Breed.name, required: true })
  breed: BreedDocument
}

@Schema({ id: true, collection: 'Post' })
export class Post {
  @Prop({ type: String, required: true })
  name: string

  @Prop({ type: String, required: true })
  description: string

  @Prop({ type: [String], required: true })
  image: string[]

  @Prop({ type: Pet, required: true })
  pet: Pet

  @Prop({ type: Types.ObjectId, ref: User.name, required: true })
  user: UserDocument

  @Prop({ type: Types.ObjectId, ref: Location.name, required: true })
  location: LocationDocument

  @Prop({ type: Boolean, required: true })
  publish: boolean
}

export const PostSchema = SchemaFactory.createForClass(Post)
