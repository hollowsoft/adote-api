import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Contact {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string

  @CreateDateColumn({ name: 'create' })
  create: Date

  @UpdateDateColumn({ name: 'update' })
  update: Date

  @Column({ name: 'mail', unique: true })
  mail?: string

  @Column({ name: 'phone', nullable: true })
  phone?: string

  @Column({ name: 'social', nullable: true })
  social?: string
}
