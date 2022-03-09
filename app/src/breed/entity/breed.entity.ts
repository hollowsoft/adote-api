import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm'

import { Kind } from './kind.entity'

@Entity()
export class Breed {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn()
  create: Date

  @UpdateDateColumn()
  update: Date

  @Column()
  key: string

  @Column({ type: 'enum', enum: Kind })
  kind: Kind
}
