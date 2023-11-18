import { Injectable } from '@nestjs/common'

import { BreedResponse } from '../breed.response'
import { ListBreedRequest } from '../list.breed.request'

import { BreedRepository } from '../breed.repository'

@Injectable()
export class ListBreed {
  constructor(private readonly repository: BreedRepository) {}

  async run(request: ListBreedRequest): Promise<BreedResponse[]> {
    const { kind } = request

    const list = await this.repository.all({
      where: {
        kind
      }
    })

    return list.map((breed) => ({
      id: breed.id,
      name: breed.name
    }))
  }
}
