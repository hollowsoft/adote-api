import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { Size } from '@/module/post/size.enum'
import { Gender } from '@/module/post/gender.enum'

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
