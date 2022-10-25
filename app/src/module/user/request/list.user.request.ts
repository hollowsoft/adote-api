import {
  IsBoolean,
  IsOptional
} from 'class-validator'

export class ListUserRequest {
  @IsBoolean()
  @IsOptional()
  enable?: boolean
}
