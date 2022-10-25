import { IsUUID } from 'class-validator'

export class RemovePostRequest {
  @IsUUID()
  readonly id: string
}
