import { Injectable } from '@nestjs/common'

import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

import { User } from './entity/user.entity'

@Injectable()
export class UserRepository {
  constructor(@InjectRepository(User) private readonly repository: Repository<User>) {}

  find(mail: string): Promise<User> {
    return this.repository.findOneBy({ mail })
  }

  create(user: User): Promise<User> {
    return this.repository.save(user)
  }
}
