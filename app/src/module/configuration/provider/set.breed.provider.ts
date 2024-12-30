import { Injectable } from '@nestjs/common'

import { BreedRepository } from '@/module/breed/repository/breed.repository'
import { Kind } from '@/module/breed/type/kind.enum'

import Cat from '@/cat.json'
import Dog from '@/dog.json'

@Injectable()
export class SetBreedProvider {
  constructor(private readonly repository: BreedRepository) {}

  async run(): Promise<void> {
    await this.repository.remove({})

    const cat = Cat.map((e) => ({
      name: e.name,
      kind: Kind.CAT
    }))

    const dog = Dog.map((e) => ({
      name: e.name,
      kind: Kind.DOG
    }))

    await this.repository.create(cat)
    await this.repository.create(dog)
  }
}
