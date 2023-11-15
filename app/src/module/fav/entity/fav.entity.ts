import {
  Entity,
  JoinColumn,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  Column
} from 'typeorm'

import { Post } from '../../post/entity/post.entity'

import { User } from '../../user/entity/user.entity'

@Entity()
export class Fav {
  constructor(fav: Partial<Fav>) {
    Object.assign(this, fav)
  }

  @ObjectIdColumn()
  id: string

  @CreateDateColumn()
  create: Date

  @UpdateDateColumn()
  update: Date

  @Column(() => Post)
  post: Post

  @Column(() => User)
  user: User
}
