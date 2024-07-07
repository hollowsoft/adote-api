import { Injectable } from '@nestjs/common'

import { AddImageProvider } from './add.image.provider'
import { RemoveImageProvider } from './remove.image.provider'

@Injectable()
export class ImageProvider {
  readonly add: AddImageProvider = new AddImageProvider()
  readonly remove: RemoveImageProvider = new RemoveImageProvider()

  constructor() {}
}
