import { Entity, Column, OneToOne, OneToMany, JoinColumn, PrimaryGeneratedColumn } from 'typeorm'

import { Post } from '../../post/entity/post.entity'
import { City } from '../../location/entity/city.entity'
import { Contact } from './contact.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ unique: true })
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

  @Column({ default: false })
  admin: boolean

  @Column({ default: true })
  enable: boolean
}
