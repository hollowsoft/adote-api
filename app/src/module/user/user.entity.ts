import { Entity, Column, ObjectIdColumn } from 'typeorm'

import { Role } from './role.enum'

import { Post } from '../post/entity/post.entity'
import { Location } from '../location/location.entity'

@Entity()
export class User {
  @ObjectIdColumn()
  id: string

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

  @Column(() => Location)
  location?: Location

  @Column(() => Contact)
  contact?: Contact

  @Column()
  role: Role

  @Column()
  enable: boolean
}

export class Contact {
  @Column()
  mail?: string

  @Column()
  phone?: string

  @Column()
  social?: string
}
