import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { Size, Gender } from '@/module/post/post.type'

@Schema()
export class History {
  @Prop(String)
  name: string

  @Prop(String)
  image: string

  @Prop([Number, Number])
  age: [number, number]

  @Prop(Size)
  size: Size

  @Prop(Gender)
  gender: Gender

  @Prop(String)
  breed: string
}

export const HistorySchema = SchemaFactory.createForClass(History)