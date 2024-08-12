import { createParamDecorator, ExecutionContext } from '@nestjs/common'

import { Token } from '@/type/auth.type'

export const Auth = createParamDecorator((_: unknown, context: ExecutionContext) => {
  const { user } = context.switchToHttp().getRequest<Token>()

  return user
})
