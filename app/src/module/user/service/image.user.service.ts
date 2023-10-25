import { Injectable } from '@nestjs/common'

import { UserRepository } from '../user.repository'

import { IImageUserService } from './image.user.service.interface'

@Injectable()
export class ImageUserService implements IImageUserService {
  constructor(private readonly repository: UserRepository) {}

  run(user: string): Promise<void> {
    return Promise.resolve()
  }
}
