import { IsMongoId } from 'class-validator'

export class AddFavRequest {
  @IsMongoId()
  readonly post: string
}
