import { Entity, Column, ObjectIdColumn } from 'typeorm'

import { Size } from './size.enum'
import { Gender } from './gender.enum'

import { User } from '../user/user.entity'
import { Breed } from '../breed/breed.entity'
import { Location } from '../location/location.entity'

export class Pet {
  @ObjectIdColumn()
  id: string

  @Column()
  name: string

  @Column()
  age: [number, number]

  @Column()
  size: Size

  @Column()
  gender: Gender

  @Column(() => Breed)
  breed: Breed
}

@Entity()
export class Post {
  @ObjectIdColumn()
  id: string

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  image: string[]

  @Column(() => Pet)
  pet: Pet

  @Column(() => Location)
  location: Location

  @Column(() => User)
  user: User

  @Column()
  publish: boolean
}
