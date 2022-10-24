import {
  QueryRunner,
  MigrationInterface
} from 'typeorm'

import { State } from '../../module/location/entity/state.entity'
import { Country } from '../../module/location/entity/country.entity'

export class State_1656380637233 implements MigrationInterface {
  async up(query: QueryRunner) {
    const country = await query.manager.findOneBy(Country, { key: 'brazil' })

    await query.manager.save(State, [
      { key: 'acre', en: '', pt: 'Acre', country },
      { key: 'alagoas', en: '', pt: 'Alagoas', country },
      { key: 'amapa', en: '', pt: 'Amapá', country },
      { key: 'amazonas', en: '', pt: 'Amazonas', country },
      { key: 'bahia', en: '', pt: 'Bahia', country },
      { key: 'ceara', en: '', pt: 'Ceará', country },
      { key: 'distrito_federal', en: '', pt: 'Distrito Federal', country },
      { key: 'espirito_santo', en: '', pt: 'Espirito Santo', country },
      { key: 'goias', en: '', pt: 'Goiás', country },
      { key: 'maranhao', en: '', pt: 'Maranhão', country },
      { key: 'mato_grosso', en: '', pt: 'Mato Grosso', country },
      { key: 'mato_grosso_sul', en: '', pt: 'Mato Grosso do Sul', country },
      { key: 'minas_gerais', en: '', pt: 'Minas Gerais', country },
      { key: 'para', en: '', pt: 'Pará', country },
      { key: 'paraiba', en: '', pt: 'Paraíba', country },
      { key: 'parana', en: '', pt: 'Paraná', country },
      { key: 'pernambuco', en: '', pt: 'Pernambuco', country },
      { key: 'piaui', en: '', pt: 'Piauí', country },
      { key: 'rio_janeiro', en: '', pt: 'Rio de Janeiro', country },
      { key: 'rio_grande_norte', en: '', pt: 'Rio Grande do Norte', country },
      { key: 'rio_grande_sul', en: '', pt: 'Rio Grande do Sul', country },
      { key: 'rondonia', en: '', pt: 'Rondônia', country },
      { key: 'roraima', en: '', pt: 'Roraima', country },
      { key: 'santa_catarina', en: '', pt: 'Santa Catarina', country },
      { key: 'sao_paulo', en: '', pt: 'São Paulo', country },
      { key: 'sergipe', en: '', pt: 'Sergipe', country },
      { key: 'tocantins', en: '', pt: 'Tocantins', country },
    ])
  }

  async down(query: QueryRunner) {
    await query.clearTable('state')
  }
}
