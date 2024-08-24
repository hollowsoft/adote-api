import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { Size } from '@/module/post/type/size.enum'
import { Gender } from '@/module/post/type/gender.enum'

@Schema({ id: true, collection: 'History' })
export class History {
  @Prop(String)
  id: string

  @Prop(String)
  name: string

  @Prop(String)
  image: string

  @Prop(Number)
  age: number

  @Prop(Size)
  size: Size

  @Prop(Gender)
  gender: Gender

  @Prop(String)
  breed: string
}

const schema = SchemaFactory.createForClass(History)

export const HistorySchema = { name: History.name, schema }
