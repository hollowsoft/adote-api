import {
  Length,
  IsEmail
} from 'class-validator'

export class AuthTokenRequest {
  @IsEmail()
  mail: string

  @Length(4, 4)
  code: string
}
