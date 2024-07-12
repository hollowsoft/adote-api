import { Injectable } from '@nestjs/common'

import dogs from '@/module/breed/dogs.json'
import cats from '@/module/breed/cats.json'

import { BreedRepository } from '@/module/breed/breed.repository'
import { Kind } from '@/module/breed/breed.type'

@Injectable()
export class SetBreedProvider {
  constructor(private repository: BreedRepository) {}

  async run(): Promise<void> {
    const breedArray = dogs
      .map((dog) => ({
        ...dog,
        kind: Kind['Dog']
      }))
      .concat(
        cats.map((cat) => ({
          ...cat,
          kind: Kind['Cat']
        }))
      )
      .sort((a, b) => {
        return a.name.localeCompare(b.name)
      })

    await this.repository.remove()

    await this.repository.save(breedArray)
  }
}
