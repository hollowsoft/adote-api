import { Entity, Column, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToOne, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { Pet } from './pet/pet.entity'
import { City } from '../../location/entity/city.entity'
import { User } from '../../user/entity/user.entity'

@Entity()
export class Post {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string

  @CreateDateColumn({ name: 'create' })
  create: Date

  @UpdateDateColumn({ name: 'update' })
  update: Date

  @Column({ name: 'title' })
  title: string

  @Column({ name: 'description' })
  description: string

  @Column({ name: 'image', type: 'text', array: true })
  image: string[]

  @OneToOne(() => Pet)
  @JoinColumn({ name: 'pet_id' })
  pet: Pet

  @OneToOne(() => City)
  @JoinColumn({ name: 'city_id' })
  city: City

  @ManyToOne(() => User, (user) => user.post)
  @JoinColumn({ name: 'user_id' })
  user: User

  @Column({ name: 'publish' })
  publish: boolean
}
