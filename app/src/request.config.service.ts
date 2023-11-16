import { Injectable } from '@nestjs/common'

import { ConfigService } from '@nestjs/config'

import {
  ThrottlerModuleOptions,
  ThrottlerOptionsFactory
} from '@nestjs/throttler'

@Injectable()
export class RequestConfigService implements ThrottlerOptionsFactory {
  constructor(private readonly service: ConfigService) {}

  createThrottlerOptions(): ThrottlerModuleOptions {
    return [
      {
        ttl: this.service.get<number>('REQUEST_TIME'),
        limit: this.service.get<number>('REQUEST_LIMIT'),
      }
    ]
  }
}
