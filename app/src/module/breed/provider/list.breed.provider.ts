import { BreedResponse } from '../breed.response'
import { BreedRepository } from '../repository/breed.repository'
import { Kind } from '../type/kind.enum'

export class ListBreedProvider {
  constructor(private readonly repository: BreedRepository) {}

  async run(kind: Kind): Promise<BreedResponse[]> {
    const list = await this.repository.list({ kind })

    return list.map((e) => new BreedResponse(e))
  }
}
