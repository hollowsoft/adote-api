import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import {
  Repository,
  FindOneOptions,
  FindManyOptions,
  SaveOptions,
  RemoveOptions
} from 'typeorm'

import { Breed } from './breed.entity'

import { EntityRepository } from 'src/repository.interface'

@Injectable()
export class BreedRepository implements EntityRepository<Breed> {
  constructor(
    @InjectRepository(Breed) private readonly repository: Repository<Breed>
  ) {}

  all(option?: FindManyOptions<Breed>): Promise<Breed[]> {
    return this.repository.find(option)
  }

  find(option: FindOneOptions<Breed>): Promise<Breed> {
    throw new Error()
  }

  save(entity: Breed, option?: SaveOptions): Promise<Breed> {
    throw new Error()
  }

  remove(entity: Breed, option?: RemoveOptions): Promise<Breed> {
    throw new Error()
  }
}
