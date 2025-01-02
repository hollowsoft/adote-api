import { IsMongoId } from 'class-validator'

export class AddFavParam {
  @IsMongoId({ message: 'the id is invalid' })
  readonly post: string
}

export class RemoveFavParam {
  @IsMongoId({ message: 'the id is invalid' })
  readonly post: string
}
