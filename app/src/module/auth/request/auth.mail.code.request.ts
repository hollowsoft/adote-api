import { Length, IsEmail } from 'class-validator'

export class AuthMailCodeRequest {
  @IsEmail()
  readonly mail: string

  @Length(6, 6)
  readonly code: string
}
