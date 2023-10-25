import { Injectable } from '@nestjs/common'

import { UserRepository } from '../user.repository'

import { UserResponse } from '../response'

import { IGetCurrentService } from './get.current.service.interface'

@Injectable()
export class GetCurrentService implements IGetCurrentService {
  constructor(private readonly repository: UserRepository) {}

  async run(id: string): Promise<UserResponse> {
    const user = await this.repository.find({
      where: {
        id,
      },
      relations: ['city.state', 'contact'],
    })

    return new UserResponse(user)
  }
}
