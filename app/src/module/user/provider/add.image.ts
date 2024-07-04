import { UserRepository } from '../user.repository'

export class AddImage {
  constructor(private readonly repository: UserRepository) {}

  run(): Promise<void> {
    return Promise.resolve()
  }
}
