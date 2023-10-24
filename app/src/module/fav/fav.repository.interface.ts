import { FindOneOptions, FindManyOptions } from 'typeorm'

import { Fav } from './entity/fav.entity'

export interface IFavRepository {
	all(option?: FindManyOptions<Fav>): Promise<Fav[]>
	find(option: FindOneOptions<Fav>): Promise<Fav | null>
	save(fav: Fav): Promise<Fav>
	remove(fav: Fav): Promise<Fav>
}
