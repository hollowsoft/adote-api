import {
  Entity,
  Column,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm'

import { Size } from './size.enum'
import { Gender } from './gender.enum'

import { Breed } from '../../../breed/entity/breed.entity'

@Entity()
export class Pet {
  constructor(pet: Partial<Pet>) {
    Object.assign(this, pet)
  }

  @PrimaryGeneratedColumn('uuid', {
    name: 'id'
  })
  id: string

  @CreateDateColumn({
    name: 'create'
  })
  create: Date

  @UpdateDateColumn({
    name: 'update'
  })
  update: Date

  @Column({
    name: 'name'
  })
  name: string

  @Column({
    name: 'age',
    type: 'int',
    array: true
  })
  age: [number, number]

  @Column({
    name: 'size',
    type: 'enum',
    enum: Size
  })
  size: Size

  @Column({
    name: 'gender',
    type: 'enum',
    enum: Gender
  })
  gender: Gender

  @OneToOne(() => Breed)
  @JoinColumn({
    name: 'breed_id'
  })
  breed: Breed
}
