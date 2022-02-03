import { Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm'

import { State } from './state.entity'

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  name: string

  @OneToOne(() => State)
  @JoinColumn()
  state: State
}
