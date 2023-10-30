import { FindManyOptions } from 'typeorm'

import { City } from './entity/city.entity'

export interface ICityRepository {
  all(option?: FindManyOptions<City>): Promise<City[]>
}
