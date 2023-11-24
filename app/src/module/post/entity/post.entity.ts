xwimport {
  Entity,
  Column,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

import { Pet } from './pet/pet.entity'
import { City } from '../../location/entity/city.entity'
import { User } from '../../user/user.entity'

@Entity()
export class Post {
  constructor(post: Partial<Post>) {
    Object.assign(this, post)
  }

  @ObjectIdColumn()
  id: string

  @CreateDateColumn()
  create: Date

  @UpdateDateColumn()
  update: Date

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  image: string[]

  @Column(() => Pet)
  pet: Pet

  @Column(() => City)
  city: City

  @Column(() => User)
  user: User

  @Column()
  publish: boolean
}
