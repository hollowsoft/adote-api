import type { UserCurrent } from '@/type/auth.type'

import { ImageProvider } from '@/module/image/provider'

import { UserRepository } from '../repository/user.repository'

export class SaveImageProvider {
  constructor(
    private readonly image: ImageProvider,
    private readonly repository: UserRepository
  ) {}

  async run(user: string) {
    // TODO: save image
    const a = await this.image.save.run('', '', {})

    console.log(a)
  }
}
