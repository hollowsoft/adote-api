import { BadRequestException } from '@nestjs/common'

import { isNil } from 'lodash'
import { Types } from 'mongoose'

import { UserRepository } from '../repository/user.repository'
import { SaveUserRequest } from '../user.request'
import { UserResponse } from '../user.response'

export class SaveUserProvider {
  constructor(private readonly repository: UserRepository) {}

  async run(id: string, request: SaveUserRequest): Promise<UserResponse> {
    const { name, description, contact, location } = request

    const map: { [key: string]: unknown } = {
      'name': name,
      'description': description,
      'contact.phone': contact.phone,
      'contact.social': contact.social,
      'location': new Types.ObjectId(location)
    }

    const user = await this.repository.save(id, map, { new: true })

    if (isNil(user)) {
      throw new BadRequestException()
    }

    return new UserResponse(user)
  }
}
