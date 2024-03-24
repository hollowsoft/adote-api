import { Reflector } from '@nestjs/core'

import { Injectable, ExecutionContext } from '@nestjs/common'

import { AuthGuard } from '@nestjs/passport'

@Injectable()
export class TokenGuard extends AuthGuard('Token') {
  constructor(private readonly reflector: Reflector) {
    super()
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>('public', [context.getClass(), context.getHandler()])

    if (isPublic) {
      return true
    }

    return super.canActivate(context)
  }
}
