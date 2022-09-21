import { Injectable } from '@nestjs/common'

import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

import { User } from './entity/user.entity'

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly repository: Repository<User>) {}

  find(): Promise<User[]> {
    return this.repository.find()
  }
}
