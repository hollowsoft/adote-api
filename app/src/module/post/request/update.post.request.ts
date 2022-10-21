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
  name: string

  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  @IsNumber({}, { each: true })
  @Min(1, { each: true })
  @Max(20, { each: true })
  age: [number, number]

  @IsEnum(Size)
  size: Size

  @IsEnum(Gender)
  gender: Gender

  @IsUUID()
  breed: string
}

export class UpdatePostParam {
  @IsUUID()
  id: string
}

export class UpdatePostRequest {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  title: string

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  description: string

  @IsArray()
  @IsUUID(4, { each: true })
  image: string[]

  @Type(() => PetRequest)
  @ValidateNested()
  pet: PetRequest

  @IsUUID()
  location: string
}
