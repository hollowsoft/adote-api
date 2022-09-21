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
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string

  @CreateDateColumn({ name: 'create' })
  create: Date

  @UpdateDateColumn({ name: 'update' })
  update: Date

  @Column({ name: 'mail', unique: true })
  mail: string

  @Column({ name: 'name', nullable: true })
  name?: string

  @Column({ name: 'image', nullable: true })
  image?: string

  @Column({ name: 'description', nullable: true })
  description?: string

  @OneToMany(() => Post, (post) => post.user)
  post: Post[]

  @ManyToMany(() => Post)
  @JoinTable({ name: 'wish' })
  wish: Post[]

  @OneToOne(() => City)
  @JoinColumn({ name: 'city_id' })
  city?: City

  @OneToOne(() => Contact)
  @JoinColumn({ name: 'contact_id' })
  contact?: Contact

  @Column({ name: 'admin', default: false })
  admin: boolean

  @Column({ name: 'enable', default: true })
  enable: boolean
}
