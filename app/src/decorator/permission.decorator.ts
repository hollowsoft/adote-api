import { SetMetadata } from '@nestjs/common'

import { Role } from '@/module/user/user.type'

export const Permission = (role: Role) => SetMetadata('permission', role)
