import { Entity, Column, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

import { Size } from './size.entity'
import { Gender } from './gender.entity'

import { Breed } from '../../breed/entity/breed.entity'

@Entity()
export class Pet {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn()
  create: Date

  @UpdateDateColumn()
  update: Date

  @Column()
  name: string

  @Column({ type: 'int', array: true })
  age: [number, number]

  @Column({ type: 'enum', enum: Size })
  size: Size

  @Column({ type: 'enum', enum: Gender })
  gender: Gender

  @OneToOne(() => Breed)
  @JoinColumn()
  breed: Breed
}
