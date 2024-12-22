import { Module } from '@nestjs/common'

import { ImageProvider } from './provider'

@Module({
  exports: [ImageProvider],
  providers: [ImageProvider]
})
export class ImageModule {}
