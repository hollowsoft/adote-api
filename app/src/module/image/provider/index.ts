import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { RemoveImageProvider } from './remove.image.provider'
import { SaveImageProvider } from './save.image.provider'

@Injectable()
export class ImageProvider {
  readonly save: SaveImageProvider = new SaveImageProvider(this.config)
  readonly remove: RemoveImageProvider = new RemoveImageProvider()

  constructor(private readonly config: ConfigService) {}
}
