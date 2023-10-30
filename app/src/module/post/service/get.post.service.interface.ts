import { GetPostRequest } from '../request'

import { PostResponse } from '../response'

export interface IGetPostService {
  run(request: GetPostRequest): Promise<PostResponse>
}
