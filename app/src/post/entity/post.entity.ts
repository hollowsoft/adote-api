import { Entity, Column, OneToOne, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm'

import { Pet } from '../../pet/entity/pet.entity'
import { City } from 'src/location/entity/city.entity'
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

  @OneToOne(() => City)
  @JoinColumn()
  city: City

  @ManyToOne(() => User, (user) => user.post)
  user: User

  @Column()
  publish: boolean
}
