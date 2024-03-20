import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class Location {
  @Prop(String)
  city: string

  @Prop(String)
  state: string
}

export const LocationSchema = SchemaFactory.createForClass(Location)
