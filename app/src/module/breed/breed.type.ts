import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export enum Kind {
  Cat = 'cat',
  Dog = 'dog'
}

export type BreedDocument = Breed & Document
@Schema({ id: true, collection: 'Breed' })
export class Breed {
  @Prop(String)
  name: string

  @Prop(Kind)
  kind: Kind
}

export const schema = SchemaFactory.createForClass(Breed)

export const BreedSchema = { name: Breed.name, schema }
