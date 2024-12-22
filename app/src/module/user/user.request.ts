import { Transform, Type, type TransformFnParams } from 'class-transformer'
import {
  IsBoolean,
  IsMongoId,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUrl,
  Length,
  ValidateNested
} from 'class-validator'

class ContactRequest {
  @IsPhoneNumber('BR')
  @IsOptional()
  readonly phone?: string

  @IsUrl()
  @IsOptional()
  readonly social?: string
}

export class ListUserRequest {
  @IsBoolean()
  @IsOptional()
  readonly enable?: boolean
}

export class SaveUserRequest {
  @IsString()
  @Length(2, 20)
  @Transform(({ value }: TransformFnParams) => value?.trim())
  readonly name: string

  @IsString()
  @Length(4, 400)
  @IsOptional()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  readonly description?: string

  @Type(() => ContactRequest)
  @IsOptional()
  @ValidateNested()
  readonly contact: ContactRequest

  @IsMongoId()
  readonly location: string
}
