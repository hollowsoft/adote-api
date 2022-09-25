import { IsEmail } from 'class-validator'

export class AuthTokenRequest {
  @IsEmail()
  mail: string

  code: string
}
