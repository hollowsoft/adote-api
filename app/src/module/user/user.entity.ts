import { Entity, Column, ObjectIdColumn } from 'typeorm'

import { Role } from './role.enum'

import { Post } from '../post/post.entity'
import { Location } from '../location/location.entity'

export class Contact {
  @Column()
  mail?: string

  @Column()
  phone?: string

  @Column()
  social?: string
}

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
