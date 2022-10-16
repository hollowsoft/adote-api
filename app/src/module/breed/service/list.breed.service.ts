import { Injectable } from '@nestjs/common'

import { Breed } from '../entity/breed.entity'
import { BreedRepository } from '../breed.repository'

import { ListBreedRequest } from '../request'
import { ListBreedResponse } from '../response'

@Injectable()
export class ListBreedService {
  constructor(private readonly repository: BreedRepository) {}

  async run(request: ListBreedRequest): Promise<ListBreedResponse[]> {
    const { kind } = request

    const list = await this.repository.all({
      where: {
        kind
      }
    })

    return list.map((breed: Breed) => new ListBreedResponse(breed))
  }
}
