import { Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { Action, ConfigurationProvider } from '../configuration.provider'
import { Role } from '@/module/user/user.type'
import { Permission } from '@/decorator/permission.decorator'

@Controller('load')
export class ConfigurationController {
  constructor(private readonly provider: ConfigurationProvider) {}

  @Permission(Role.Admin)
  @Post()
  @HttpCode(HttpStatus.OK)
  async loadLocation(): Promise<HttpStatus> {
    if ((await this.provider.action[Action.LoadLocation].run()) != null) {
      return HttpStatus.OK
    }
  }
}
