import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { User } from '@/module/user/user.entity'
import { Breed } from '@/module/breed/breed.type'

export enum Size {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export enum Gender {
  Male = 'male',
  Female = 'female'
}

@Schema()
export class Pet {
  @Prop(String)
  name: string

  @Prop([Number, Number])
  age: [number, number]

  @Prop(Size)
  size: Size

  @Prop(Gender)
  gender: Gender

  @Prop(Breed)
  breed: Breed
}

@Schema()
export class Post {
  @Prop(String)
  name: string

  @Prop(String)
  description: string

  @Prop([String])
  image: string[]

  @Prop(Pet)
  pet: Pet

  @Prop(User)
  user: User

  @Prop(Location)
  location: Location

  @Prop(Boolean)
  publish: boolean
}

export const PostSchema = SchemaFactory.createForClass(Post)
