import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Kind {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  key: string
}
