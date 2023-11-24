import { Entity, Column, ObjectIdColumn } from 'typeorm'

@Entity()
export class Fav {
  @ObjectIdColumn()
  id: string

  @Column()
  post: string

  @Column()
  user: string
}
