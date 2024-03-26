import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

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

const schema = SchemaFactory.createForClass(Breed)

export const BreedSchema = { name: Breed.name, schema }
