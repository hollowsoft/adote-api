import { Injectable } from '@nestjs/common'

import { BreedResponse } from '../breed.response'
import { ListBreedRequest } from '../breed.request'

import { BreedRepository } from '../breed.repository'

export class ListBreedProvider {
  constructor(private readonly repository: BreedRepository) {}

  async run(request: ListBreedRequest): Promise<BreedResponse[]> {
    const { kind } = request

    const list = await this.repository.list()

    return list.map((breed) => ({
      id: '',
      name: breed.name
    }))
  }
}
