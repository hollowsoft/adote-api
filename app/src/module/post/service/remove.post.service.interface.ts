import { RemovePostRequest } from '../request'

export interface IRemovePostService {
  run(request: RemovePostRequest, user: string): Promise<void>
}
