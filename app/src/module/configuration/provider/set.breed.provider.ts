import { Injectable } from '@nestjs/common'

import cat from '@/module/breed/cat.json'
import dog from '@/module/breed/dog.json'

import { Kind } from '@/module/breed/breed.type'

import { BreedRepository } from '@/module/breed/breed.repository'

@Injectable()
export class SetBreedProvider {
  constructor(private repository: BreedRepository) {}

  async run(): Promise<void> {
    await this.repository.remove()

    await this.repository.save(cat.map((e) => ({ ...e, kind: Kind.Cat })))
    await this.repository.save(dog.map((e) => ({ ...e, kind: Kind.Dog })))
  }
}
