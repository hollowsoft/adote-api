import {
  Entity,
  Column,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  ObjectIdColumn
} from 'typeorm'

import { Size } from './size.enum'
import { Gender } from './gender.enum'

import { Breed } from '../../../breed/breed.entity'

@Entity()
export class Pet {
  constructor(pet: Partial<Pet>) {
    Object.assign(this, pet)
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
  age: [number, number]

  @Column()
  size: Size

  @Column()
  gender: Gender

  @Column(() => Breed)
  breed: Breed
}
