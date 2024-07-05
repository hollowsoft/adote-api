import { Injectable } from '@nestjs/common'
import * as fs from 'fs'
import * as path from 'path'
import { LocationRepository } from '@/module/location/location.respository'
import { LocationResponse } from '@/module/location/location.response'

@Injectable()
export class LoadLocation {
  constructor(private REPOSITORY: LocationRepository) {}

  async run(): Promise<LocationResponse[]> {
    const filePath = path.join(__dirname, '../../../../city.json')
    const jsonData = fs.readFileSync(filePath, 'utf-8')
    const locations = JSON.parse(jsonData)

    await this.REPOSITORY.deleteAll()

    return await this.REPOSITORY.saveMany(locations)
  }
}
