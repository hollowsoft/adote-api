import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class History {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn()
  create: Date

  @UpdateDateColumn()
  update: Date

  @Column()
  name: string

  @Column()
  image: string
}
