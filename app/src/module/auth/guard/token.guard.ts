import { Injectable } from '@nestjs/common'

import { AuthGuard as Guard } from '@nestjs/passport'

@Injectable()
export class TokenGuard extends Guard() {}
