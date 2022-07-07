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
    await query.dropColumn('city', 'acre')
    await query.dropColumn('city', 'alagoas')
    await query.dropColumn('city', 'amazonas')
    await query.dropColumn('city', 'amapa')
    await query.dropColumn('city', 'bahia')
    await query.dropColumn('city', 'ceara')
    await query.dropColumn('city', 'distritoFederal')
    await query.dropColumn('city', 'espiritoSanto')
    await query.dropColumn('city', 'goias')
    await query.dropColumn('city', 'maranhao')
    await query.dropColumn('city', 'minasGerais')
    await query.dropColumn('city', 'matoGrosso')
    await query.dropColumn('city', 'matoGrossoDoSul')
    await query.dropColumn('city', 'para')
    await query.dropColumn('city', 'paraiba')
    await query.dropColumn('city', 'parana')
    await query.dropColumn('city', 'pernambuco')
    await query.dropColumn('city', 'piaui')
    await query.dropColumn('city', 'rioDeJaneiro')
    await query.dropColumn('city', 'rioGrandeDoNorte')
    await query.dropColumn('city', 'rioGrandeDoSul')
    await query.dropColumn('city', 'rondonia')
    await query.dropColumn('city', 'roraima')
    await query.dropColumn('city', 'santaCatarina')
    await query.dropColumn('city', 'saoPaulo')
    await query.dropColumn('city', 'sergipe')
    await query.dropColumn('city', 'tocantins')
  }
}
