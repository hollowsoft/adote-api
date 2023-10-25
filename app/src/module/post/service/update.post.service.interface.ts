import { UpdatePostParam, UpdatePostRequest } from '../request'

import { PostResponse } from '../response'

export interface IUpdatePostService {
  run(
    param: UpdatePostParam,
    request: UpdatePostRequest,
    user: string,
  ): Promise<PostResponse>
}
