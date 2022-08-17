import { QueryRunner, MigrationInterface } from 'typeorm'

import { Country } from '../location/entity/country.entity'

export class CreateCountryContent implements MigrationInterface {
  public async up(query: QueryRunner) {
    await query.manager.save(Country, { key: 'brazil', en: 'Brazil', pt: 'Brasil' })
  }

  public async down(query: QueryRunner) {
    await query.clearTable('country')
  }
}
