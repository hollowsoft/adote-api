import { Transform, TransformFnParams } from 'class-transformer'
import { IsNotEmpty, IsString } from 'class-validator'

export class AddFavRequest {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  readonly post: string
}
