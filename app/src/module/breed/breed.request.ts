import { IsEnum } from 'class-validator'

import { Kind } from './breed.type'

export class ListBreedRequest {
  @IsEnum(Kind)
  readonly kind: Kind
}
