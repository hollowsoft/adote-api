import { Role } from '@/module/user/user.type'

export type UserCurrent = {
  readonly id: string
  readonly role: Role
}

export type UserToken = {
  readonly sub: string
  readonly iat: number
  readonly exp: number
  readonly user: UserCurrent
}
