import { BreedResponse } from '../breed.response'
import { ListBreedRequest } from '../breed.request'

import { BreedRepository } from '../breed.repository'

export class ListBreedProvider {
  constructor(private readonly repository: BreedRepository) {}

  async run(request: ListBreedRequest): Promise<BreedResponse[]> {
    const { kind } = request

    const list = await this.repository.list({ kind })

    return list.map((breed) => {
      return {
        id: breed._id,
        name: breed.name
      }
    })
  }
}
