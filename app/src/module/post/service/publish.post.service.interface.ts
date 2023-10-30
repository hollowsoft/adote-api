import { PublishPostParam, PublishPostRequest } from '../request'

import { PublishPostResponse } from '../response'

export interface IPublishPostService {
  run(
    param: PublishPostParam,
    request: PublishPostRequest,
    user: string,
  ): Promise<PublishPostResponse>
}
