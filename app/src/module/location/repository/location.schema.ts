import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { HydratedDocument } from 'mongoose'

export type LocationDocument = HydratedDocument<Location>

@Schema({ id: true, collection: 'Location' })
export class Location {
  @Prop({ type: String, required: true })
  city: string

  @Prop({ type: String, required: true })
  state: string
}

export const LocationSchema = SchemaFactory.createForClass(Location)
