import { ExecutionContext, createParamDecorator } from '@nestjs/common'

import { Token } from '@/type/token.type'

export const Auth = createParamDecorator((_: unknown, context: ExecutionContext): Token => {
  const { user } = context.switchToHttp().getRequest()

  return user
})
