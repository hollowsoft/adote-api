import { PostRepository } from '../repository/post.repository'

import { PatchPostRequest } from '../post.request'
import { PostResponse } from '../post.response'
import { PatchPost } from '../repository/update.post.model'

export class PatchPostProvider {
  constructor(private readonly repository: PostRepository) {}

  async run(id: string, request: PatchPostRequest): Promise<PostResponse> {
    const post = this.repository.update({ _id: id }, new PatchPost(request)).then((type) =>
      type.populate([
        { path: 'pet.breed', model: 'Breed' },
        { path: 'user.contact', model: 'Contact' },
        { path: 'location', model: 'Location' }
      ])
    )

    return new PostResponse(post)
  }
}
