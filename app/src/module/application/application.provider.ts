import { Injectable } from '@nestjs/common'
import { ApplicationRepository } from './application.repository'
import { LoadLocation } from './provider/load.application'

export enum Action {
  LoadLocation
}

@Injectable()
export class ApplicationProvider {
  action: [LoadLocation]

  constructor(private readonly repository: ApplicationRepository) {
    this.action = [new LoadLocation(this.repository)]
  }
}
