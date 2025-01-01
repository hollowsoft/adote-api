import { Role } from '@/module/user/type/role.enum'

export type User = {
  readonly id: string
  readonly mail: string
  readonly role: Role
}

export type Token = {
  readonly sub: string
  readonly iat: number
  readonly exp: number
  readonly user: User
}
