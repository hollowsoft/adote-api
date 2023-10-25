import { FavResponse } from '../response'

export interface IListFavService {
  run(user: string): Promise<FavResponse[]>
}
