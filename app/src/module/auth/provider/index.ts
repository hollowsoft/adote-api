import { Injectable } from '@nestjs/common'

import { MailAuth } from './mail.auth'
import { RenewAuth } from './renew.auth'
import { VerifyAuth } from './verify.auth'

export enum Action {
  Mail,
  Renew,
  Verify
}

export { MailAuth, RenewAuth, VerifyAuth }

@Injectable()
export class AuthProvider {
  action: [MailAuth, RenewAuth, VerifyAuth]

  constructor(
    private readonly mail: MailAuth,
    private readonly renew: RenewAuth,
    private readonly verify: VerifyAuth
  ) {
    this.action = [this.mail, this.renew, this.verify]
  }
}
