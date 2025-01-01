import { createParamDecorator, type ExecutionContext } from '@nestjs/common'

export const UserCurrent = createParamDecorator((_: unknown, context: ExecutionContext) => {
  const { user } = context.switchToHttp().getRequest()

  return user
})
