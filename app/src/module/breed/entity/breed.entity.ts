import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm'

import { Kind } from './kind.entity'

@Entity()
export class Breed {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string

  @CreateDateColumn({ name: 'create' })
  create: Date

  @UpdateDateColumn({ name: 'update' })
  update: Date

  @Column({ name: 'key' })
  key: string

  @Column({ name: 'kind', type: 'enum', enum: Kind })
  kind: Kind

  @Column({ name: 'en' })
  en: string

  @Column({ name: 'pt' })
  pt: string
}