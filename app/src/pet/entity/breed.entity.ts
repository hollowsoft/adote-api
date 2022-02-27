import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

import { Kind } from './kind.entity'

@Entity()
export class Breed {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  key: string

  @Column()
  kind: Kind
}
