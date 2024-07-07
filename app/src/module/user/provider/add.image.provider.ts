import { UserRepository } from '../user.repository'

export class AddImageProvider {
  constructor(private readonly repository: UserRepository) {}

  run(): Promise<void> {
    return Promise.resolve()
  }
}
