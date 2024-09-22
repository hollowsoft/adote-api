import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { HydratedDocument, Types } from 'mongoose'

import { Gender } from '@/module/post/type/gender.enum'
import { Size } from '@/module/post/type/size.enum'

export type HistoryDocument = HydratedDocument<History>

@Schema({ id: true, collection: 'History' })
export class History {
  @Prop({ type: String, required: true })
  name: string

  @Prop({ type: String, required: true })
  image: string

  @Prop({ type: Number, required: true })
  age: number

  @Prop({ type: String, enum: Size, required: true })
  size: Size

  @Prop({ type: String, enum: Gender, required: true })
  gender: Gender

  @Prop({ type: String, required: true })
  breed: string
}

export const HistorySchema = SchemaFactory.createForClass(History)
