import { Get, Controller } from '@nestjs/common'

import { Public } from '@/decorator/public.decorator'

@Controller('health')
export class HealthController {
  @Get()
  @Public()
  health() {
    return 'aa'
  }
}
