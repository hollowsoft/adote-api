import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

import { Kind } from './kind.entity'

@Entity()
export class Breed {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  key: string

  @Column({ type: 'enum', enum: Kind })
  kind: Kind
}
