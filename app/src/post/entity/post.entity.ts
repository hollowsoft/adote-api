import { Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'

import { Pet } from '../../pet/entity/pet.entity'
import { User } from '../../user/entity/user.entity'

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  image: string[]

  @OneToOne(() => Pet)
  @JoinColumn()
  pet: Pet

  @ManyToOne(() => User, (user) => user.post)
  @JoinColumn()
  user: User

  @Column()
  adopt: boolean

  @Column()
  publish: boolean
}
