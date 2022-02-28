import { Entity, Column, OneToOne, OneToMany, JoinColumn, PrimaryGeneratedColumn } from 'typeorm'

import { Post } from '../../post/entity/post.entity'
import { City } from '../../location/entity/city.entity'
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
  post: Post[]

  @OneToOne(() => City)
  @JoinColumn()
  city: City

  @OneToOne(() => Contact)
  @JoinColumn()
  contact: Contact

  @Column()
  admin: boolean

  @Column()
  enable: boolean
}
