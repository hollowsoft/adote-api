import {
  Entity,
  Column,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity()
export class Contact {
  constructor(contact: Partial<Contact>) {
    Object.assign(this, contact)
  }

  @ObjectIdColumn()
  id: string

  @CreateDateColumn()
  create: Date

  @UpdateDateColumn()
  update: Date

  @Column()
  mail?: string

  @Column()
  phone?: string

  @Column()
  social?: string
}
