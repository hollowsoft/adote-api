import {
  Entity,
  Column,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm'

import { State } from './state.entity'

@Entity()
export class City {
  constructor(city: Partial<City>) {
    Object.assign(this, city)
  }

  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string

  @CreateDateColumn({ name: 'create' })
  create: Date

  @UpdateDateColumn({ name: 'update' })
  update: Date

  @Column({ name: 'name' })
  name: string

  @OneToOne(() => State)
  @JoinColumn({ name: 'state_id' })
  state: State
}
