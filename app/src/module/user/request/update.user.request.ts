import {
  IsUUID,
  IsString,
  MaxLength,
  IsNotEmpty,
  IsEmail,
  IsPhoneNumber,
  IsOptional,
  ValidateNested
} from 'class-validator'

import {
  Type,
  Transform,
  TransformFnParams
} from 'class-transformer'

class ContactRequest {
  @IsEmail()
  @IsOptional()
  mail?: string

  @IsPhoneNumber('BR')
  @IsOptional()
  phone?: string

  @IsString()
  @MaxLength(20)
  @IsOptional()
  social?: string
}

export class UpdateUserRequest {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  name: string

  @IsString()
  @MaxLength(400)
  @IsOptional()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  description?: string

  @IsUUID()
  location: string

  @Type(() => ContactRequest)
  @IsOptional()
  @ValidateNested()
  contact?: ContactRequest
}
