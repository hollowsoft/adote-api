import { Injectable } from '@nestjs/common'

import { SaveBreed } from '@/module/breed/repository/breed.model'
import { BreedRepository } from '@/module/breed/repository/breed.repository'
import { Kind } from '@/module/breed/type/kind.enum'

import Cat from '@/cat.json'
import Dog from '@/dog.json'

@Injectable()
export class SetBreedProvider {
  constructor(private repository: BreedRepository) {}

  async run(): Promise<void> {
    await this.repository.remove({})

    const cat = Cat.map((e) => new SaveBreed(e.name, Kind.Cat))
    const dog = Dog.map((e) => new SaveBreed(e.name, Kind.Dog))

    await this.repository.save(cat)
    await this.repository.save(dog)
  }
}
