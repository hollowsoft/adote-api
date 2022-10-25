import {
  IsEnum,
  IsOptional
} from 'class-validator'

import { Size } from '../entity/pet/size.enum'

export class ListPostRequest {
  @IsEnum(Size)
  @IsOptional()
  size?: Size
}
