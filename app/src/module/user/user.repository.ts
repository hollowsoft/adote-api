import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import {
  Repository,
  FindOneOptions,
  FindManyOptions
} from 'typeorm'

import { User } from './entity/user.entity'

import { IUserRepository } from './user.repository.interface'

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(@InjectRepository(User) private readonly repository: Repository<User>) {}

  all(option?: FindManyOptions<User>): Promise<User[]> {
    return this.repository.find(option)
  }

  find(option: FindOneOptions<User>): Promise<User | null> {
    return this.repository.findOne(option)
  }

  save(user: User): Promise<User> {
    return this.repository.save(user)
  }
}
