import { IsString } from 'class-validator'

export class SearchLocationRequest {
  @IsString()
  readonly term: string
}
