import { Length, IsEmail } from 'class-validator'

export class AuthRequest {
  @IsEmail()
  readonly mail: string
}

export class VerifyRequest {
  @IsEmail()
  readonly mail: string

  @Length(6, 6)
  readonly code: string
}
