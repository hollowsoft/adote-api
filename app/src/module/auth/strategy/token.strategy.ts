import { Injectable } from '@nestjs/common'

import type { ConfigService } from '@nestjs/config'

import {
  Strategy,
  ExtractJwt
} from 'passport-jwt'

import { PassportStrategy } from '@nestjs/passport'

@Injectable()
export class TokenStrategy extends PassportStrategy(Strategy) {}
