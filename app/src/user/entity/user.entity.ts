import {
  Entity,
  Column,
  JoinTable,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  OneToMany,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'

import { Post } from '../../post/entity/post.entity'
import { City } from '../../location/entity/city.entity'
import { Contact } from './contact.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn()
  create: Date

  @UpdateDateColumn()
  update: Date

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

  @ManyToMany(() => Post)
  @JoinTable({ name: 'wish' })
  wish: Post[]

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
