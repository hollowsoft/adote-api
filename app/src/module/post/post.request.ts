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

import { Size, Gender } from './post.type'

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

export class ListPostRequest {
  @IsEnum(Size)
  @IsOptional()
  readonly size?: Size
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
  readonly image: string[]

  @Type(() => PetRequest)
  @ValidateNested()
  readonly pet: PetRequest

  @IsString()
  readonly location: string
}
