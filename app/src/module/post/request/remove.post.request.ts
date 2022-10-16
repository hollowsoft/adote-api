import { IsUUID } from 'class-validator'

export class RemovePostRequest {
  @IsUUID()
  id: string
}
