import { Entity, Column, ObjectIdColumn } from 'typeorm'

import { Kind } from './kind.enum'

@Entity()
export class Breed {
  @ObjectIdColumn()
  id: string

  @Column()
  name: string

  @Column()
  kind: Kind
}
