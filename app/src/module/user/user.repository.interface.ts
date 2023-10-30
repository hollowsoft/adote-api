import { FindOneOptions, FindManyOptions } from 'typeorm'

import { User } from './entity/user.entity'

export interface IUserRepository {
  all(option?: FindManyOptions<User>): Promise<User[]>

  find(option: FindOneOptions<User>): Promise<User | null>

  save(user: User): Promise<User>
}
