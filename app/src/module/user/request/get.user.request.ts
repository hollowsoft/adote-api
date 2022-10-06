import { IsUUID } from 'class-validator'

export class GetUserRequest {
  @IsUUID()
  id: string
}
