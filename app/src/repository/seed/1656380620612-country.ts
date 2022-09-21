import { QueryRunner, MigrationInterface } from 'typeorm'

import { Country } from '../../module/location/entity/country.entity'

export class Country_1656380620612 implements MigrationInterface {
  public async up(query: QueryRunner) {
    await query.manager.save(Country, { key: 'brazil', en: 'Brazil', pt: 'Brasil' })
  }

  public async down(query: QueryRunner) {
    await query.clearTable('country')
  }
}
