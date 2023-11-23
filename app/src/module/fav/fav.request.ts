import { IsString } from 'class-validator'

export class AddFavRequest {
  @IsString()
  readonly post: string
}

export class RemoveFavRequest {
  @IsString()
  readonly id: string
}
