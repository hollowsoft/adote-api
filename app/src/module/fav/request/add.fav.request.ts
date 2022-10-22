import { IsUUID } from 'class-validator'

export class AddFavRequest {
  @IsUUID()
  readonly id: string
}
