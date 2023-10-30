import { RemoveFavRequest } from '../request'

export interface IRemoveFavService {
  run(request: RemoveFavRequest, user: string): Promise<void>
}
