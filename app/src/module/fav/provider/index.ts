import { AddFav } from './add.fav'
import { ListFav } from './list.fav'
import { RemoveFav } from './remove.fav'

export enum Provider {
  AddFav,
  ListFav,
  RemoveFav
}

export type FavProvider = [AddFav, ListFav, RemoveFav]

export const FavProvider = Symbol('FavProvider')

export { AddFav, ListFav, RemoveFav }
