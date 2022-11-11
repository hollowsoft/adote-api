import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn
} from 'typeorm'

@Entity()
export class Country {
  constructor(country: Partial<Country>) {
    Object.assign(this, country)
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
}
