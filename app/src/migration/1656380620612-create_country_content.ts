import { MigrationInterface, QueryRunner } from 'typeorm'
import { Country } from 'src/location/entity/country.entity'
import { countries } from 'seeds/country.seed'

export class CreateCountryContent implements MigrationInterface {
  public async up(query: QueryRunner) {
    await query.manager.save(Country, countries)
  }

  public async down(query: QueryRunner) {
    await query.dropColumn('country', 'countries')
  }
}
