import { Injectable, NotFoundException } from '@nestjs/common'

import { FavRepository } from '../fav.repository'

import { RemoveFavRequest } from '../request'

import { isNil } from 'lodash'

import { IRemoveFavService } from './remove.fav.service.interface'

@Injectable()
export class RemoveFavService implements IRemoveFavService {
  constructor(private readonly repository: FavRepository) {}

  async run(request: RemoveFavRequest, user: string): Promise<void> {
    const { id } = request

    const fav = await this.repository.find({
      where: {
        id,
        user: {
          id: user,
        },
      },
    })

    if (isNil(fav)) {
      throw new NotFoundException('fav not found')
    }

    await this.repository.remove(fav)
  }
}
