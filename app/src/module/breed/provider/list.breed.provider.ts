import { ListBreedRequest } from '../breed.request'
import { BreedResponse } from '../breed.response'
import { BreedRepository } from '../repository/breed.repository'

export class ListBreedProvider {
  constructor(private readonly repository: BreedRepository) {}

  async run(request: ListBreedRequest): Promise<BreedResponse[]> {
    const list = await this.repository.list(request)

    return list.map((e) => new BreedResponse(e))
  }
}
