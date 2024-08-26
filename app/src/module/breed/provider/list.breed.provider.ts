import { Injectable } from '@nestjs/common'

import { BreedResponse } from '../breed.response'
import { ListBreedRequest } from '../breed.request'

import { BreedRepository } from '../breed.repository'
import { BreedDocument } from '../breed.type'

@Injectable()
export class ListBreedProvider {
  constructor(private readonly repository: BreedRepository) {}

  async run(request: ListBreedRequest): Promise<BreedResponse[]> {
    const { kind } = request

    const list: BreedDocument[] = await this.repository.list({ kind: kind })

    return list.map((breed) => new BreedResponse(breed))
  }
}
