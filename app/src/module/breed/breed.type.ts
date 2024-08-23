import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { HydratedDocument } from 'mongoose'

export type BreedDocument = HydratedDocument<Breed>

export enum Kind {
  Cat = 'cat',
  Dog = 'dog'
}

@Schema({ id: true, collection: 'Breed' })
export class Breed {
  @Prop(String)
  name: string

  @Prop(Kind)
  kind: Kind
}

export const schema = SchemaFactory.createForClass(Breed)

export const BreedSchema = { name: Breed.name, schema }
