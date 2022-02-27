import { Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm'

import { Breed } from '../../breed/entity/breed.entity'
import { PetSize } from './pet_size.entity'

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  name: string

  @Column()
  age: [number, number]

  @Column()
  size: PetSize

  @OneToOne(() => Breed)
  @JoinColumn()
  breed: Breed
}
