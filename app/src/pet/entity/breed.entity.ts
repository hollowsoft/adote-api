import { Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm'

import { Kind } from './kind.entity'

@Entity()
export class Breed {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  key: string

  @OneToOne(() => Kind)
  @JoinColumn()
  kind: Kind
}
