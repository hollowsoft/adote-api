import { Transform, Type, type TransformFnParams } from 'class-transformer'
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsEnum,
  IsMongoId,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Length,
  Min,
  ValidateNested
} from 'class-validator'

import { Gender } from './type/gender.enum'
import { Size } from './type/size.enum'

export class PetRequest {
  @IsString()
  @Length(2, 20)
  @Transform(({ value }: TransformFnParams) => value?.trim())
  readonly name: string

  @IsDate()
  readonly birth: Date

  @IsEnum(Size)
  readonly size: Size

  @IsEnum(Gender)
  readonly gender: Gender

  @IsMongoId()
  readonly breed: string
}

export class ListPostRequest {
  @IsNumber()
  @Min(1)
  readonly page: number

  @IsNumber()
  @Min(1)
  readonly amount: number

  @IsMongoId()
  @IsOptional()
  readonly location: string
}

export class SavePostRequest {
  @IsString()
  @Length(4, 400)
  @Transform(({ value }: TransformFnParams) => value?.trim())
  readonly description: string

  @IsArray()
  @IsUUID(4, { each: true })
  readonly image: string[]

  @Type(() => PetRequest)
  @ValidateNested()
  readonly pet: PetRequest
}

export class SavePublishPostRequest {
  @IsBoolean()
  readonly publish: boolean
}
