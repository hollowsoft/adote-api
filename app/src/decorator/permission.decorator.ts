import { SetMetadata } from '@nestjs/common'

import { Role } from '../module/user/entity/role.enum'

export const Permission = (role: Role) => SetMetadata('permission', role)
