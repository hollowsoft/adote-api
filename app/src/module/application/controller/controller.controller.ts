import { Controller, Post } from '@nestjs/common'
import { Action, ApplicationProvider } from '../application.provider'
import { Role } from '@/module/user/user.type'
import { Permission } from '@/decorator/permission.decorator'

@Controller('load')
export class ControllerController {
  constructor(private readonly provider: ApplicationProvider) {}

  @Permission(Role.Admin)
  @Post()
  async loadLocation() {
    this.provider.action[Action.LoadLocation].run()
  }
}
