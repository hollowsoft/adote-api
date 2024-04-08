import { Injectable } from '@nestjs/common'

import { AddImage } from './add.image'
import { RemoveImage } from './remove.image'

export enum Action {
  Add,
  Remove
}

export { AddImage, RemoveImage }

@Injectable()
export class HistoryProvider {
  action: [AddImage, RemoveImage]

  constructor(
    private readonly add: AddImage,
    private readonly remove: RemoveImage
  ) {
    this.action = [this.add, this.remove]
  }
}
