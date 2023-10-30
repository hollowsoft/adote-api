import { Injectable } from '@nestjs/common'

import { Breed } from '../entity/breed.entity'

import { BreedRepository } from '../breed.repository'

import { ListBreedRequest } from '../request'

import { BreedResponse } from '../response'

import { IListBreedService } from './list.breed.service.interface'

@Injectable()
export class ListBreedService implements IListBreedService {
  constructor(private readonly repository: BreedRepository) {}

  async run(request: ListBreedRequest): Promise<BreedResponse[]> {
    const { kind } = request

    const list = await this.repository.all({
      where: {
        kind,
      },
    })

    return list.map((breed: Breed) => new BreedResponse(breed))
  }
}
