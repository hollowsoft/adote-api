import { Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { Action, ConfigurationProvider } from '../configuration.provider'
import { Role } from '@/module/user/user.type'
import { Permission } from '@/decorator/permission.decorator'

@Controller('/configuration')
export class ConfigurationController {
  constructor(private readonly provider: ConfigurationProvider) {}

  @Permission(Role.Admin)
  @Post('/location')
  @HttpCode(HttpStatus.OK)
  async loadLocation(): Promise<void> {
    await this.provider.action[Action.LoadLocation].run()
  }
}
