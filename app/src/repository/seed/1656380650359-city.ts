import { QueryRunner, MigrationInterface } from 'typeorm'

import { City } from '../../module/location/entity/city.entity'
import { State } from '../../module/location/entity/state.entity'

import { keyBy } from 'lodash'

export class City_1656380650359 implements MigrationInterface {
  async up(query: QueryRunner) {
    const list = await query.manager.find(State)

    const state = keyBy(list, 'key')

    // acre
    await query.manager.save(City, [
      { key: '', en: '', pt: '', state: state['acre'] }
    ])

    // alagoas
    await query.manager.save(City, [
      { key: '', en: '', pt: '', state: state['alagoas'] }
    ])

    // amapa
    await query.manager.save(City, [
      { key: '', en: '', pt: '', state: state['amapa'] }
    ])
  }

  async down(query: QueryRunner) {
    await query.clearTable('city')
  }
}
