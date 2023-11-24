import { Entity, Column, ObjectIdColumn } from 'typeorm'

import { Size } from '../post/size.enum'
import { Gender } from '../post/gender.enum'

@Entity()
export class History {
  @ObjectIdColumn()
  id: string

  @Column()
  name: string

  @Column()
  image: string

  @Column()
  age: [number, number]

  @Column()
  size: Size

  @Column()
  gender: Gender

  @Column()
  breed: string
}
