import { Injectable } from '@nestjs/common'

import { BreedRepository } from '@/module/breed/repository/breed.repository'
import cat from '@/module/breed/type/cat.json'
import dog from '@/module/breed/type/dog.json'
import { Kind } from '@/module/breed/type/kind.enum'

@Injectable()
export class SetBreedProvider {
  constructor(private repository: BreedRepository) {}

  async run(): Promise<void> {
    await this.repository.remove({})

    await this.repository.save(cat.map((e) => ({ ...e, kind: Kind.Cat })))
    await this.repository.save(dog.map((e) => ({ ...e, kind: Kind.Dog })))
  }
}
