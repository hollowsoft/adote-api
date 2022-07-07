import { MigrationInterface, QueryRunner } from 'typeorm'
import { State } from 'src/location/entity/state.entity'
import { states } from 'seeds/state.seed'

export class CreateStateContent implements MigrationInterface {
  public async up(query: QueryRunner) {
    await query.manager.save(State, states)
  }

  public async down(query: QueryRunner) {
    await query.dropColumn('state', 'states')
  }
}
