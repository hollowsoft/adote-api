import { Entity, Column, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToOne, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { Pet } from './pet/pet.entity'
import { City } from '../../location/entity/city.entity'
import { User } from '../../user/entity/user.entity'

@Entity()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn()
  create: Date

  @UpdateDateColumn()
  update: Date

  @Column()
  name: string

  @Column()
  description: string

  @Column({ type: 'text', array: true })
  image: string[]

  @OneToOne(() => Pet)
  @JoinColumn()
  pet: Pet

  @OneToOne(() => City)
  @JoinColumn()
  city: City

  @ManyToOne(() => User, (user) => user.post)
  user: User

  @Column()
  publish: boolean
}
