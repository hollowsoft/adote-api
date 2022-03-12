import { Injectable } from '@nestjs/common'

import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

import { Kind } from './entity/kind.entity'
import { Breed } from './entity/breed.entity'

@Injectable()
export class BreedService {
  constructor(@InjectRepository(Breed) private readonly repository: Repository<Breed>) {}

  find(kind: Kind): Promise<Breed[]> {
    return this.repository.find({ where: { kind } })
  }
}
