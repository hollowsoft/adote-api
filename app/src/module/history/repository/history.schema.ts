import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { HydratedDocument, Types } from 'mongoose'

import { Pet } from '@/module/post/repository/post.schema'

export type HistoryDocument = HydratedDocument<History>

@Schema({
  id: true,
  timestamps: { createdAt: 'create', updatedAt: 'update' },
  collection: 'History'
})
export class History {
  @Prop({ type: Pet, required: true })
  pet: Pet

  @Prop({ type: String, required: true })
  image: string
}

export const HistorySchema = SchemaFactory.createForClass(History)
