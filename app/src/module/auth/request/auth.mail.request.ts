import { IsEmail } from 'class-validator'

export class AuthMailRequest {
  @IsEmail()
  mail: string
}
