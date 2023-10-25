import { ListPostRequest } from '../request'

import { PostResponse } from '../response'

export interface IListPostService {
  run(request: ListPostRequest): Promise<PostResponse[]>
}
