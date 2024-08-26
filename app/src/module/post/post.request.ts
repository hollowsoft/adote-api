import {
  Min,
  Max,
  IsEnum,
  IsArray,
  IsNumber,
  IsString,
  IsBoolean,
  IsOptional,
  IsNotEmpty,
  ValidateNested
} from 'class-validator'

import { Type, Transform, TransformFnParams } from 'class-transformer'

import { Size } from './type/size.enum'
import { Gender } from './type/gender.enum'

export class PetRequest {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  readonly name: string

  @IsNumber()
  @Min(1)
  @Max(20)
  readonly age: number

  @IsEnum(Size)
  readonly size: Size

  @IsEnum(Gender)
  readonly gender: Gender

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  readonly breed: string
}

export class CreatePostRequest {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  readonly name: string

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  readonly description: string

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  readonly image: string[]

  @Type(() => PetRequest)
  @ValidateNested()
  readonly pet: PetRequest

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  readonly location: string

  @IsBoolean()
  readonly publish: boolean
}

export class ListPostRequest {
  @IsEnum(Size)
  @IsOptional()
  readonly size?: number

  @IsOptional()
  readonly page: number
}

export class PublishPostRequest {
  @IsBoolean()
  readonly publish: boolean
}

export class PatchPostRequest {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  readonly title: string

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  readonly description: string

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  readonly image: string[]

  @Type(() => PetRequest)
  @ValidateNested()
  readonly pet: PetRequest

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  readonly location: string
}
