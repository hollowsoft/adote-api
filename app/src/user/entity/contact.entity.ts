import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Contact {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  mail: string

  @Column()
  phone: string

  @Column()
  social: string
}
