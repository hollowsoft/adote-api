import { Post, HttpCode, HttpStatus, Controller } from '@nestjs/common'

import { Role } from '@/module/user/user.type'
import { Permission } from '@/decorator/permission.decorator'

import { ConfigurationProvider } from './provider'

@Controller('/configuration')
export class ConfigurationController {
  constructor(private readonly provider: ConfigurationProvider) {}

  @Post('/user')
  @HttpCode(HttpStatus.OK)
  @Permission(Role.Admin)
  user(): Promise<void> {
    return this.provider.user.run()
  }

  @Post('/location')
  @HttpCode(HttpStatus.OK)
  @Permission(Role.Admin)
  location(): Promise<void> {
    return this.provider.location.run()
  }
}
