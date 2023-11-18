import {
  Entity,
  Column,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

import { Size } from '../../post/entity/pet/size.enum'
import { Gender } from '../../post/entity/pet/gender.enum'

import { Breed } from '../../breed/breed.entity'

@Entity()
export class History {
  constructor(history: Partial<History>) {
    Object.assign(this, history)
  }

  @ObjectIdColumn()
  id: string

  @CreateDateColumn()
  create: Date

  @UpdateDateColumn()
  update: Date

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

  @Column(() => Breed)
  breed: Breed
}
