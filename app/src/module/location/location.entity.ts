import { Entity, Column, ObjectIdColumn } from 'typeorm'

@Entity()
export class Location {
  @ObjectIdColumn()
  id: string

  @Column()
  city: string

  @Column()
  state: string
}
