import {
  Entity,
  Column,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

import { Country } from './country.entity'

@Entity()
export class State {
  constructor(state: Partial<State>) {
    Object.assign(this, state)
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

  @Column(() => Country)
  country: Country
}
