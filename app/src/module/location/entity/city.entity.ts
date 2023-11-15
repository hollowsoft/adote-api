import {
  Entity,
  Column,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

import { State } from './state.entity'

@Entity()
export class City {
  constructor(city: Partial<City>) {
    Object.assign(this, city)
  }

  @ObjectIdColumn()
  id: string

  @CreateDateColumn()
  create: Date

  @UpdateDateColumn()
  update: Date

  @Column()
  key: string

  @Column()
  en: string

  @Column()
  pt: string

  @Column(() => State)
  state: State
}
