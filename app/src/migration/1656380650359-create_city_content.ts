import { City } from './../location/entity/city.entity'
import { MigrationInterface, QueryRunner } from 'typeorm'
import {
  acre,
  alagoas,
  amapa,
  amazonas,
  bahia,
  ceara,
  distritoFederal,
  espiritoSanto,
  goias,
  maranhao,
  matoGrosso,
  matoGrossoDoSul,
  minasGerais,
  para,
  paraiba,
  parana,
  pernambuco,
  piaui,
  rioDeJaneiro,
  rioGrandeDoNorte,
  rioGrandeDoSul,
  rondonia,
  roraima,
  santaCatarina,
  saoPaulo,
  sergipe,
  tocantins,
} from 'seeds/city.seed'

export class CreateCityContent implements MigrationInterface {
  public async up(query: QueryRunner) {
    await query.manager.save(City, acre)
    await query.manager.save(City, alagoas)
    await query.manager.save(City, amazonas)
    await query.manager.save(City, amapa)
    await query.manager.save(City, bahia)
    await query.manager.save(City, ceara)
    await query.manager.save(City, distritoFederal)
    await query.manager.save(City, espiritoSanto)
    await query.manager.save(City, goias)
    await query.manager.save(City, maranhao)
    await query.manager.save(City, minasGerais)
    await query.manager.save(City, matoGrosso)
    await query.manager.save(City, matoGrossoDoSul)
    await query.manager.save(City, para)
    await query.manager.save(City, paraiba)
    await query.manager.save(City, parana)
    await query.manager.save(City, pernambuco)
    await query.manager.save(City, piaui)
    await query.manager.save(City, rioDeJaneiro)
    await query.manager.save(City, rioGrandeDoNorte)
    await query.manager.save(City, rioGrandeDoSul)
    await query.manager.save(City, rondonia)
    await query.manager.save(City, roraima)
    await query.manager.save(City, santaCatarina)
    await query.manager.save(City, saoPaulo)
    await query.manager.save(City, sergipe)
    await query.manager.save(City, tocantins)
  }

  public async down(query: QueryRunner) {
    await query.dropColumn('state', 'acre')
    await query.dropColumn('state', 'alagoas')
    await query.dropColumn('state', 'amazonas')
    await query.dropColumn('state', 'amapa')
    await query.dropColumn('state', 'bahia')
    await query.dropColumn('state', 'ceara')
    await query.dropColumn('state', 'distritoFederal')
    await query.dropColumn('state', 'espiritoSanto')
    await query.dropColumn('state', 'goias')
    await query.dropColumn('state', 'maranhao')
    await query.dropColumn('state', 'minasGerais')
    await query.dropColumn('state', 'matoGrosso')
    await query.dropColumn('state', 'matoGrossoDoSul')
    await query.dropColumn('state', 'para')
    await query.dropColumn('state', 'paraiba')
    await query.dropColumn('state', 'parana')
    await query.dropColumn('state', 'pernambuco')
    await query.dropColumn('state', 'piaui')
    await query.dropColumn('state', 'rioDeJaneiro')
    await query.dropColumn('state', 'rioGrandeDoNorte')
    await query.dropColumn('state', 'rioGrandeDoSul')
    await query.dropColumn('state', 'rondonia')
    await query.dropColumn('state', 'roraima')
    await query.dropColumn('state', 'santaCatarina')
    await query.dropColumn('state', 'saoPaulo')
    await query.dropColumn('state', 'sergipe')
    await query.dropColumn('state', 'tocantins')
  }
}
