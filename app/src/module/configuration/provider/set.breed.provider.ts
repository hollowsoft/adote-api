import { Injectable } from '@nestjs/common'

import dog from '@/module/breed/dog.json'
import cat from '@/module/breed/cat.json'

import { BreedRepository } from '@/module/breed/breed.repository'
import { Kind } from '@/module/breed/breed.type'

@Injectable()
export class SetBreedProvider {
  constructor(private repository: BreedRepository) {}

  async run(): Promise<void> {
    const breedArray = dog
      .map((dog) => ({
        ...dog,
        kind: Kind['Dog']
      }))
      .concat(
        cat.map((cat) => ({
          ...cat,
          kind: Kind['Cat']
        }))
      )

    await this.repository.remove()

    await this.repository.save(breedArray)
  }
}
