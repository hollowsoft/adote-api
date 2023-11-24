import {
  Min,
  Max,
  IsEnum,
  IsArray,
  IsNumber,
  IsString,
  IsNotEmpty,
  ArrayMinSize,
  ArrayMaxSize,
  ValidateNested,
  IsOptional,
  IsBoolean
} from 'class-validator'

import { Type, Transform, TransformFnParams } from 'class-transformer'

import { Size } from './size.enum'
import { Gender } from './gender.enum'

export class CreatePostRequest {
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
  readonly image: string[]

  @Type(() => PetRequest)
  @ValidateNested()
  readonly pet: PetRequest

  @IsString()
  readonly location: string
}

export class GetPostRequest {
  @IsString()
  readonly id: string
}

export class ListPostRequest {
  @IsEnum(Size)
  @IsOptional()
  readonly size?: Size
}

export class PublishPostParam {
  @IsString()
  readonly id: string
}

export class PublishPostRequest {
  @IsBoolean()
  readonly publish: boolean
}

export class RemovePostRequest {
  @IsString()
  readonly id: string
}

class PetRequest {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  readonly name: string

  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  @IsNumber({}, { each: true })
  @Min(1, { each: true })
  @Max(20, { each: true })
  readonly age: [number, number]

  @IsEnum(Size)
  readonly size: Size

  @IsEnum(Gender)
  readonly gender: Gender

  @IsString()
  readonly breed: string
}

export class UpdatePostParam {
  @IsString()
  readonly id: string
}

export class UpdatePostRequest {
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
  readonly image: string[]

  @Type(() => PetRequest)
  @ValidateNested()
  readonly pet: PetRequest

  @IsString()
  readonly location: string
}
