import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({ id: true, collection: 'Location' })
export class Location {
  @Prop(String)
  city: string

  @Prop(String)
  state: string
}

export const schema = SchemaFactory.createForClass(Location)

export const LocationSchema = { name: Location.name, schema }
