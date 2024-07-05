import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common'
import { Action, ConfigurationProvider } from '../configuration.provider'
import { Role } from '@/module/user/user.type'
import { Permission } from '@/decorator/permission.decorator'
import { Public } from '@/decorator/public.decorator'
import { LocationResponse } from '@/module/location/location.response'

@Controller('load')
export class ConfigurationController {
  constructor(private readonly provider: ConfigurationProvider) {}

  @Permission(Role.Admin)
  @Public()
  @Get()
  @HttpCode(HttpStatus.OK)
  async loadLocation(): Promise<HttpStatus> {
    const list_slice: LocationResponse[] =
      await this.provider.action[Action.LoadLocation].run()

    if (list_slice != null) {
      return HttpStatus.OK
    }
  }
}
