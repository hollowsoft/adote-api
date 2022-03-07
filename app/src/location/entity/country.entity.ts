import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Country {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string
}
