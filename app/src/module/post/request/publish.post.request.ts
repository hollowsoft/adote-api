import {
  IsUUID,
  IsBoolean
} from 'class-validator'

export class PublishPostParam {
  @IsUUID()
  readonly id: string
}

export class PublishPostRequest {
  @IsBoolean()
  readonly publish: boolean
}
