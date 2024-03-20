import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export enum Kind {
  Cat = 'cat',
  Dog = 'dog'
}

@Schema()
export class Breed {
  @Prop()
  name: string

  @Prop()
  kind: Kind
}

export const BreedSchema = SchemaFactory.createForClass(Breed)
