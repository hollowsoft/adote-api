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

export class GetPostParam {
  @IsMongoId({ message: 'the id is invalid' })
  readonly id: string
}

export class SavePostParam {
  @IsMongoId({ message: 'the id is invalid' })
  readonly id: string
}

export class SavePublishPostParam {
  @IsMongoId({ message: 'the id is invalid' })
  readonly id: string
}

export class RemovePostParam {
  @IsMongoId({ message: 'the id is invalid' })
  readonly id: string
}

class PetRequest {
  @IsString()
  @Length(2, 20)
  @Transform(({ value }: TransformFnParams) => value?.trim())
  readonly name: string

  @IsDate()
  @Type(() => Date)
  readonly birth: Date

  @IsEnum(Size)
  readonly size: Size

  @IsEnum(Gender)
  readonly gender: Gender

  @IsMongoId({ message: 'the id is invalid' })
  readonly breed: string
}

export class ListPostRequest {
  @IsNumber()
  @Min(1)
  @Type(() => Number)
  readonly page: number

  @IsNumber()
  @Min(1)
  @Type(() => Number)
  readonly amount: number

  @IsMongoId({ message: 'the id is invalid' })
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
  @Type(() => Boolean)
  readonly publish: boolean
}
