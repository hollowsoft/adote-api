import {
  Min,
  Max,
  IsEnum,
  IsUUID,
  IsArray,
  IsNumber,
  IsString,
  IsNotEmpty,
  ArrayMinSize,
  ArrayMaxSize,
  ValidateNested
} from 'class-validator'

import {
  Type,
  Transform,
  TransformFnParams
} from 'class-transformer'

import { Size } from '../entity/pet/size.enum'
import { Gender } from '../entity/pet/gender.enum'

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

  @IsUUID()
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
  @IsUUID(4, { each: true })
  readonly image: string[]

  @Type(() => PetRequest)
  @ValidateNested()
  readonly pet: PetRequest

  @IsUUID()
  readonly location: string
}
