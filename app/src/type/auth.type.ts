import { Role } from '@/module/user/user.type'

export type UserToken = {
  readonly id: string
  readonly role: Role
}

export type Token = {
  readonly sub: string
  readonly iat: number
  readonly exp: number
  readonly user: UserToken
}
