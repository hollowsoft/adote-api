import { IsUUID } from 'class-validator'

export class RemoveFavRequest {
  @IsUUID()
  id: string
}
