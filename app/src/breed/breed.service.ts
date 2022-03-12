import { Injectable } from '@nestjs/common'

import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

import { Breed } from './entity/breed.entity'
import { Kind } from './entity/kind.entity'

@Injectable()
export class BreedService {
  constructor(@InjectRepository(Breed) private readonly repository: Repository<Breed>) {}

  find(kind: Kind): Promise<Breed[]> {
    return this.repository.find({ where: { kind } })
  }
}
