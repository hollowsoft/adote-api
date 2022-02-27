import { Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm'

import { Size } from './size.entity'
import { Kind } from './kind.entity'
import { Breed } from './breed.entity'

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

  @OneToOne(() => Kind)
  @JoinColumn()
  kind: Kind

  @OneToOne(() => Breed)
  @JoinColumn()
  breed: Breed
}
