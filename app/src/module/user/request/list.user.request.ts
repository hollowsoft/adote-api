import {
  IsBoolean,
  IsOptional
} from 'class-validator'

export class ListUserRequest {
  @IsOptional()
  @IsBoolean()
  enable?: boolean
}
