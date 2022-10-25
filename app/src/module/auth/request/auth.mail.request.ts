import { IsEmail } from 'class-validator'

export class AuthMailRequest {
  @IsEmail()
  readonly mail: string
}
