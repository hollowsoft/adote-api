import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

import { PetKind } from '../../pet/entity/pet_kind.entity'

@Entity()
export class Breed {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  key: string

  @Column()
  kind: PetKind
}
