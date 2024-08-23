import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { HydratedDocument } from 'mongoose'

export type LocationDocument = HydratedDocument<Location>

@Schema({ id: true, collection: 'Location' })
export class Location {
  @Prop(String)
  city: string

  @Prop(String)
  state: string
}

export const schema = SchemaFactory.createForClass(Location)

export const LocationSchema = { name: Location.name, schema }
