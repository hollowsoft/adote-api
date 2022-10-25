import {
  IsString,
  IsOptional
} from 'class-validator'

export class SearchLocationRequest {
  @IsString()
  @IsOptional()
  readonly term?: string
}
