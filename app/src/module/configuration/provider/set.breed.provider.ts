import { Injectable } from '@nestjs/common'

import breed from '@/module/breed/breed.json'

import { BreedRepository } from '@/module/breed/breed.repository'
import { Kind } from '@/module/breed/breed.type'

@Injectable()
export class SetBreedProvider {
  constructor(private repository: BreedRepository) {}

  async run(): Promise<void> {
    const breedArray = breed.map((breed) => ({
      ...breed,
      kind: Kind[breed.kind]
    }))

    await this.repository.remove()

    this.repository.save(breedArray)
  }
}
