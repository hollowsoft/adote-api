import { Reflector } from '@nestjs/core'

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
    const isPublic = this.reflector.getAllAndOverride<boolean>('public', [
      context.getClass(),
      context.getHandler()
    ])

    if (isPublic) { return true }

    return super.canActivate(context)
  }
}
