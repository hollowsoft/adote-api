import { Module } from '@nestjs/common'

import { ImageProvider } from './provider'

@Module({
  providers: [ImageProvider]
})
export class ImageModule {}
