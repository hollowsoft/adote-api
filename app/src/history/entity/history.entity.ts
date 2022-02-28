import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class History {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  name: string

  @Column()
  image: string
}
