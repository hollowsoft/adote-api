import {
  IsEnum,
  IsOptional
} from 'class-validator'

import { Kind } from '../entity/kind.enum'

export class ListBreedRequest {
  @IsEnum(Kind)
  @IsOptional()
  readonly kind?: Kind
}
