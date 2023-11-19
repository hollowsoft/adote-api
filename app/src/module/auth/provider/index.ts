import { MailAuth } from './mail.auth'
import { RenewAuth } from './renew.auth'
import { VerifyAuth } from './verify.auth'

export enum Provider {
  MailAuth,
  RenewAuth,
  VerifyAuth
}

export type AuthProvider = [MailAuth, RenewAuth, VerifyAuth]

export const AuthProvider = Symbol('AuthProvider')

export { MailAuth, RenewAuth, VerifyAuth }
