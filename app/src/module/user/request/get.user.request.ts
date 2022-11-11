import { IsUUID } from 'class-validator'

export class GetUserRequest {
  @IsUUID()
  readonly id: string
}
