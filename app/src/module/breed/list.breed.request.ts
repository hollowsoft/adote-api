import { IsEnum } from 'class-validator'

import { Kind } from './kind.enum'

export class ListBreedRequest {
  @IsEnum(Kind)
  readonly kind: Kind
}
