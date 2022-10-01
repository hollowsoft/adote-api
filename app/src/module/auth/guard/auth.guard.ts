import type { Reflector } from '@nestjs/core'

import {
  Injectable,
  ExecutionContext
} from '@nestjs/common'

import { AuthGuard as Guard } from '@nestjs/passport'

@Injectable()
export class AuthGuard extends Guard('auth') {
  constructor(private readonly reflector: Reflector) {
    super()
  }

  canActivate(context: ExecutionContext) {
    const { getClass, getHandler } = context

    const isPublic = this.reflector.getAllAndOverride<boolean>('public', [getClass, getHandler])

    if (isPublic) { return true }

    return super.canActivate(context)
  }
}
