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
    name: 'key'
  })
  key: string

  @Column({
    name: 'en'
  })
  en: string

  @Column({
    name: 'pt'
  })
  pt: string

  @OneToOne(() => State)
  @JoinColumn({
    name: 'state_id'
  })
  state: State
}
