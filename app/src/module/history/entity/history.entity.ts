import { Entity, Column, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

import { Size } from '../../post/entity/pet/size.entity'
import { Gender } from '../../post/entity/pet/gender.entity'

import { Breed } from '../../breed/entity/breed.entity'

@Entity()
export class History {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string

  @CreateDateColumn({ name: 'create' })
  create: Date

  @UpdateDateColumn({ name: 'update' })
  update: Date

  @Column({ name: 'name' })
  name: string

  @Column({ name: 'image' })
  image: string

  @Column({ name: 'age', type: 'int', array: true })
  age: [number, number]

  @Column({ name: 'size', type: 'enum', enum: Size })
  size: Size

  @Column({ name: 'gender', type: 'enum', enum: Gender })
  gender: Gender

  @OneToOne(() => Breed)
  @JoinColumn({ name: 'breed_id' })
  breed: Breed
}
