import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn
} from 'typeorm'

import { Kind } from './kind.enum'

@Entity()
export class Breed {
  constructor(breed: Partial<Breed>) {
    Object.assign(this, breed)
  }

  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string

  @CreateDateColumn({ name: 'create' })
  create: Date

  @UpdateDateColumn({ name: 'update' })
  update: Date

  @Column({ name: 'key' })
  key: string

  @Column({ name: 'en' })
  en: string

  @Column({ name: 'pt' })
  pt: string

  @Column({ name: 'kind', type: 'enum', enum: Kind })
  kind: Kind
}
