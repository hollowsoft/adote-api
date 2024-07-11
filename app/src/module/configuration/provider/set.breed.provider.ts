import { Injectable } from '@nestjs/common'

import breed from '@/module/breed/breed.json'

import { BreedRepository } from '@/module/breed/breed.repository'

@Injectable()
export class SetBreedProvider {
  constructor(private repository: BreedRepository) {}

  async run(): Promise<void> {
    await this.repository.remove()

    await this.repository.save(breed)
  }
}
