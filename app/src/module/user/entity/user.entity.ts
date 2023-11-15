import {
  Entity,
  Column,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

import { Post } from '../../post/entity/post.entity'
import { City } from '../../location/entity/city.entity'

import { Role } from './role.enum'
import { Contact } from './contact.entity'

@Entity()
export class User {
  constructor(user: Partial<User>) {
    Object.assign(this, user)
  }

  @ObjectIdColumn()
  id: string

  @CreateDateColumn()
  create: Date

  @UpdateDateColumn()
  update: Date

  @Column()
  mail: string

  @Column()
  name?: string

  @Column()
  image?: string

  @Column()
  description?: string

  @Column(() => Post)
  fav: Post[]

  @Column(() => Post)
  post: Post[]

  @Column(() => City)
  city?: City

  @Column(() => Contact)
  contact?: Contact

  @Column()
  role: Role

  @Column()
  enable: boolean
}
