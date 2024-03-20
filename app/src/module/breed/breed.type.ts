import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export enum Kind {
  Cat = 'cat',
  Dog = 'dog'
}

@Schema()
export class Breed {
  @Prop(String)
  name: string

  @Prop(Kind)
  kind: Kind
}

export const BreedSchema = SchemaFactory.createForClass(Breed)
