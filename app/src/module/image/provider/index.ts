import { Injectable } from '@nestjs/common'

import { AddImage } from './add.image'
import { RemoveImage } from './remove.image'

@Injectable()
export class HistoryProvider {
  readonly add: AddImage = new AddImage()
  readonly remove: RemoveImage = new RemoveImage()

  constructor() {}
}
