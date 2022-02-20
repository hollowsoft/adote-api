import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  name: string
}
