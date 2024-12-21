import { createParamDecorator, type ExecutionContext } from '@nestjs/common'

import type { UserToken } from '@/type/auth.type'

export const User = createParamDecorator((_: unknown, context: ExecutionContext) => {
  const { user } = context.switchToHttp().getRequest<UserToken>()

  return user
})
