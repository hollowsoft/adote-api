import { Entity, Column, OneToMany, JoinColumn, PrimaryGeneratedColumn } from 'typeorm'

import { Post } from '../../post/entity/post.entity'
import { Contact } from './contact.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  mail: string

  @Column()
  name: string

  @Column()
  image: string

  @Column()
  description: string

  @OneToMany(() => Post, (post) => post.user)
  @JoinColumn()
  post: Post[]

  @OneToMany(() => Contact, (contact) => contact.user)
  @JoinColumn()
  contact: Contact[]
}
