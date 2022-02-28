import { Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm'

import { Size } from './size.entity'
import { Breed } from '../../breed/entity/breed.entity'

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  name: string

  @Column()
  age: [number, number]

  @Column()
  size: Size

  @OneToOne(() => Breed)
  @JoinColumn()
  breed: Breed
}
