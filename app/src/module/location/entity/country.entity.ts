import {
  Entity,
  Column,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity()
export class Country {
  constructor(country: Partial<Country>) {
    Object.assign(this, country)
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
}
