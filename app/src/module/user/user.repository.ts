import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import {
  Repository,
  FindOneOptions,
  FindManyOptions,
  SaveOptions,
  RemoveOptions
} from 'typeorm'

import { User } from './user.entity'

import { EntityRepository } from 'src/repository.interface'

@Injectable()
export class UserRepository implements EntityRepository<User> {
  constructor(@InjectRepository(User) private readonly repository: Repository<User>) {}

  all(option?: FindManyOptions<User>): Promise<User[]> {
    return this.repository.find(option)
  }

  find(option: FindOneOptions<User>): Promise<User> {
    return this.repository.findOne(option)
  }

  save(user: User, option?: SaveOptions): Promise<User> {
    return this.repository.save(user)
  }

  remove(user: User, option?: RemoveOptions): Promise<User> {
    throw new Error('Method not implemented.')
  }
}
