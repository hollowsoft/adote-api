import { Reflector } from '@nestjs/core'

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'

import { Role } from '../../user/role.enum'

import { isNil } from 'lodash'

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
      user: { role }
    } = context.switchToHttp().getRequest()

    return list.includes(role)
  }
}
