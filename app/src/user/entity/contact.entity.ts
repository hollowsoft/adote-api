import { Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { User } from './user.entity'

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  mail: string

  @Column()
  phone: string

  @Column()
  social: string

  @OneToOne(() => User)
  @JoinColumn()
  user: User
}
