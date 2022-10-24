import { IsUUID } from 'class-validator'

export class GetPostRequest {
  @IsUUID()
  readonly id: string
}
