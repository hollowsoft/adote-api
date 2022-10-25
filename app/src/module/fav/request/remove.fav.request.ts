import { IsUUID } from 'class-validator'

export class RemoveFavRequest {
  @IsUUID()
  readonly id: string
}
