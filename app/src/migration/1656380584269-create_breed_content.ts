import { MigrationInterface, QueryRunner } from 'typeorm'
import { Breed } from 'src/breed/entity/breed.entity'
import { cats, dogs } from './../../seeds/breed.seed'

export class CreateBreedContent implements MigrationInterface {
  public async up(query: QueryRunner): Promise<void> {
    await query.manager.save(Breed, dogs)
    await query.manager.save(Breed, cats)
  }

  public async down(query: QueryRunner): Promise<void> {
    await query.dropColumn('breed', 'dogs')
    await query.dropColumn('breed', 'cats')
  }
}
