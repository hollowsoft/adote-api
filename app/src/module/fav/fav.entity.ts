import { Entity, Column, ObjectIdColumn } from 'typeorm'

import { Post } from '../post/entity/post.entity'

import { User } from '../user/entity/user.entity'

@Entity()
export class Fav {
  @ObjectIdColumn()
  id: string

  @Column(() => Post)
  post: string

  @Column(() => User)
  user: string
}
