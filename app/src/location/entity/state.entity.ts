import { Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm'

import { Country } from './country.entity'

@Entity()
export class State {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  name: string

  @OneToOne(() => Country)
  @JoinColumn()
  country: Country
}
