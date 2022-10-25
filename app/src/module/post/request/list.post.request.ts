import {
  IsEnum,
  IsOptional
} from 'class-validator'

import { Size } from '../entity/pet/size.enum'

export class ListPostRequest {
  @IsOptional()
  @IsEnum(Size)
  size?: Size
}
