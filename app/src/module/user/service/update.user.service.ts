import { Injectable } from '@nestjs/common'

import { User } from '../entity/user.entity'
import { City } from '../../location/entity/city.entity'
import { Contact } from '../entity/contact.entity'

import { UserRepository } from '../user.repository'

import { UpdateUserRequest } from '../request'
import { UpdateUserResponse } from '../response'

@Injectable()
export class UpdateUserService {
  constructor(private readonly repository: UserRepository) {}

  async run(request: UpdateUserRequest, id: string): Promise<UpdateUserResponse> {
    const find = await this.repository.find({
      where: {
        id
      },
      relations: [
        'contact'
      ]
    })

    const { contact } = find

    await this.repository.save(this.build(id, contact?.id, request))

    const user = await this.repository.find({
      where: {
        id
      },
      relations: [
        'city.state',
        'contact'
      ]
    })

    return new UpdateUserResponse(user)
  }

  private toContact(id: string, request: UpdateUserRequest): Contact {
    const { contact } = request

    return new Contact({
      id,
      mail: contact?.mail,
      phone: contact?.phone,
      social: contact?.social
    })
  }

  private build(id: string, contact: string, request: UpdateUserRequest): User {
    return new User({
      id,
      name: request.name,
      description: request.description,
      city: new City({
        id: request.location
      }),
      contact: this.toContact(contact, request)
    })
  }
}