import {
  IsString,
  MaxLength,
  IsNotEmpty,
  IsBoolean,
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  ValidateNested
} from 'class-validator'

import { Type, Transform, TransformFnParams } from 'class-transformer'

class ContactRequest {
  @IsEmail()
  @IsOptional()
  readonly mail?: string

  @IsPhoneNumber('BR')
  @IsOptional()
  readonly phone?: string

  @IsString()
  @MaxLength(20)
  @IsOptional()
  readonly social?: string
}

export class GetUserRequest {
  @IsString()
  readonly id: string
}

export class ListUserRequest {
  @IsBoolean()
  @IsOptional()
  readonly enable?: boolean
}

export class UpdateUserRequest {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  readonly name: string

  @IsString()
  @MaxLength(400)
  @IsOptional()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  readonly description?: string

  @Type(() => ContactRequest)
  @IsOptional()
  @ValidateNested()
  readonly contact?: ContactRequest

  @IsString()
  readonly location: string
}
