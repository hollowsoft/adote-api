import {
  Length,
  IsEmail
} from 'class-validator'

export class AuthMailCodeRequest {
  @IsEmail()
  mail: string

  @Length(6, 6)
  code: string
}
