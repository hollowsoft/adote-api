import { Injectable } from '@nestjs/common'
import { ApplicationRepository } from '../application.repository'
import * as fs from 'fs'
import * as path from 'path'

@Injectable()
export class LoadLocation {
  constructor(private REPOSITORY: ApplicationRepository) {}

  async run() {
    const filePath = path.join(__dirname, '../../../../city.json')
    const jsonData = fs.readFileSync(filePath, 'utf-8')
    const locations = JSON.parse(jsonData)

    await this.REPOSITORY.deleteAll()

    await this.REPOSITORY.saveMany(locations)
  }
}
