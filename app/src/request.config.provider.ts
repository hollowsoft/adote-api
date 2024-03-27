import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { ThrottlerModuleOptions, ThrottlerOptionsFactory } from '@nestjs/throttler'

@Injectable()
export class RequestConfigProvider implements ThrottlerOptionsFactory {
  constructor(private readonly config: ConfigService) {}

  createThrottlerOptions(): ThrottlerModuleOptions {
    return [
      {
        ttl: this.config.get<number>('REQUEST_TIME'),
        limit: this.config.get<number>('REQUEST_LIMIT')
      }
    ]
  }
}
