import {
  Entity,
  Column,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

import { Kind } from './kind.enum'

@Entity()
export class Breed {
  constructor(breed: Partial<Breed>) {
    Object.assign(this, breed)
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

  @Column()
  kind: Kind
}
