import { IsString } from 'class-validator'

export class AddFavRequest {
  @IsString()
  readonly id: string
}
