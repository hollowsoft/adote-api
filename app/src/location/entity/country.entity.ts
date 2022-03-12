import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Country {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn()
  create: Date

  @UpdateDateColumn()
  update: Date

  @Column()
  name: string
}
