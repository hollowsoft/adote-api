import { ListBreedRequest } from '../breed.request'
import { BreedResponse } from '../breed.response'
import { BreedRepository } from '../repository/breed.repository'

export class ListBreedProvider {
  constructor(private readonly repository: BreedRepository) {}

  async run(request: ListBreedRequest): Promise<BreedResponse[]> {
    const { kind } = request

    const list = await this.repository.list({ kind })

    return list.map((breed) => new BreedResponse(breed))
  }
}
