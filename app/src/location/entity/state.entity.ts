import { Entity, Column, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

import { Country } from './country.entity'

@Entity()
export class State {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string

  @CreateDateColumn({ name: 'create' })
  create: Date

  @UpdateDateColumn({ name: 'update' })
  update: Date

  @Column({ name: 'name' })
  name: string

  @OneToOne(() => Country)
  @JoinColumn({ name: 'country_id' })
  country: Country
}
