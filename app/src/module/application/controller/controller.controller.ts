import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common'
import { Action, ApplicationProvider } from '../application.provider'
import { Role } from '@/module/user/user.type'
import { Permission } from '@/decorator/permission.decorator'
import { LocationResponse } from '../response/location.response'
import { Public } from '@/decorator/public.decorator'

@Controller('load')
export class ApplicationController {
  constructor(private readonly provider: ApplicationProvider) {}

  @Permission(Role.Admin)
  @Public()
  @Get()
  @HttpCode(HttpStatus.OK)
  async loadLocation() {
    const list_slice: LocationResponse[] =
      await this.provider.action[Action.LoadLocation].run()

    return list_slice.slice(0, 5)
  }
}
