import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { Types, type HydratedDocument } from 'mongoose'

import type { BreedDocument } from '@/module/breed/repository/breed.schema'
import type { LocationDocument } from '@/module/location/repository/location.schema'
import type { UserDocument } from '@/module/user/repository/user.schema'

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

  @Prop({ type: Types.ObjectId, ref: 'Breed', required: true })
  breed: BreedDocument
}

@Schema({
  id: true,
  timestamps: { createdAt: 'create', updatedAt: 'update' },
  collection: 'Post'
})
export class Post {
  @Prop({ type: String, required: true })
  description: string

  @Prop({ type: [String], required: true })
  image: string[]

  @Prop({ type: Pet, required: true })
  pet: Pet

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user: UserDocument

  @Prop({ type: Types.ObjectId, ref: 'Location', required: true })
  location: LocationDocument

  @Prop({ type: Boolean, required: true })
  publish: boolean
}

export const PostSchema = SchemaFactory.createForClass(Post)
