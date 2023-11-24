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
  constructor(@InjectRepository(Breed) private readonly repository: Repository<Breed>) {}

  all(option?: FindManyOptions<Breed>): Promise<Breed[]> {
    return this.repository.find(option)
  }

  find(option: FindOneOptions<Breed>): Promise<Breed> {
    throw new Error()
  }

  save(breed: Breed, option?: SaveOptions): Promise<Breed> {
    throw new Error()
  }

  remove(breed: Breed, option?: RemoveOptions): Promise<Breed> {
    throw new Error()
  }
}
