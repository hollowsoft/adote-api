import { Injectable } from '@nestjs/common'

import { InjectRepository } from '@nestjs/typeorm'

import { Repository, FindManyOptions } from 'typeorm'

import { Breed } from './entity/breed.entity'

import { IBreedRepository } from './breed.repository.interface'

@Injectable()
export class BreedRepository implements IBreedRepository {
  constructor(@InjectRepository(Breed) private readonly repository: Repository<Breed>) {}

  all(option?: FindManyOptions<Breed>): Promise<Breed[]> {
    return this.repository.find(option)
  }
}
