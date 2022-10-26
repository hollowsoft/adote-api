import {
  Entity,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'

import { Post } from '../../post/entity/post.entity'

import { User } from '../../user/entity/user.entity'

@Entity()
export class Fav {
  constructor(fav: Partial<Fav>) {
    Object.assign(this, fav)
  }

  @PrimaryGeneratedColumn('uuid', {
    name: 'id'
  })
  id: string

  @CreateDateColumn({
    name: 'create'
  })
  create: Date

  @UpdateDateColumn({
    name: 'update'
  })
  update: Date

  @OneToOne(() => Post)
  @JoinColumn({
    name: 'post_id'
  })
  post: Post

  @OneToOne(() => User)
  @JoinColumn({
    name: 'user_id'
  })
  user: User
}
