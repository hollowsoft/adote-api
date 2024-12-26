import { Injectable, type CanActivate, type ExecutionContext } from '@nestjs/common'
import { Reflector } from '@nestjs/core'

import { isNil } from 'lodash'

import { Role } from '@/module/user/type/role.enum'

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext) {
    const list = this.reflector.getAllAndOverride<Role[]>('permission', [
      context.getClass(),
      context.getHandler()
    ])

    if (isNil(list)) {
      return true
    }

    const {
      user: {
        user: { role }
      }
    } = context.switchToHttp().getRequest()

    return list.includes(role)
  }
}
