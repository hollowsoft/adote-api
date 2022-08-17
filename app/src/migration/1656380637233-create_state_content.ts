import { QueryRunner, MigrationInterface } from 'typeorm'

import { State } from '../location/entity/state.entity'
import { Country } from '../location/entity/country.entity'

export class CreateStateContent_1656380637233 implements MigrationInterface {
  public async up(query: QueryRunner) {
    const country = await query.manager.findOneBy(Country, { key: 'brazil' })

    await query.manager.save(State, [
      { name: 'Acre', country },
      { name: 'Alagoas', country },
      { name: 'Amapá', country },
      { name: 'Amazonas', country },
      { name: 'Bahia', country },
      { name: 'Ceará', country },
      { name: 'Distrito Federal', country },
      { name: 'Espirito Santo', country },
      { name: 'Goiás', country },
      { name: 'Maranhão', country },
      { name: 'Mato Grosso', country },
      { name: 'Mato Grosso do Sul', country },
      { name: 'Minas Gerais', country },
      { name: 'Pará', country },
      { name: 'Paraíba', country },
      { name: 'Paraná', country },
      { name: 'Pernambuco', country },
      { name: 'Piauí', country },
      { name: 'Rio de Janeiro', country },
      { name: 'Rio Grande do Norte', country },
      { name: 'Rio Grande do Sul', country },
      { name: 'Rondônia', country },
      { name: 'Roraima', country },
      { name: 'Santa Catarina', country },
      { name: 'São Paulo', country },
      { name: 'Sergipe', country },
      { name: 'Tocantins', country },
    ])
  }

  public async down(query: QueryRunner) {
    await query.clearTable('state')
  }
}
