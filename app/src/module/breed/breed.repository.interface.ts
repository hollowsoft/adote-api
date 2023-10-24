import { FindManyOptions } from 'typeorm'

import { Breed } from './entity/breed.entity'

export interface IBreedRepository {
  all(option?: FindManyOptions<Breed>): Promise<Breed[]>
}
