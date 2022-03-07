import { Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm'

import { State } from './state.entity'

@Entity()
export class City {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @OneToOne(() => State)
  @JoinColumn()
  state: State
}
