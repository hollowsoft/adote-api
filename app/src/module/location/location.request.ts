import { Transform, type TransformFnParams } from 'class-transformer'
import { IsString, MinLength } from 'class-validator'

export class SearchLocationRequest {
  @IsString()
  @MinLength(4)
  @Transform(({ value }: TransformFnParams) => value?.trim())
  readonly city: string
}
