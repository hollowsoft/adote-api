import { Module } from '@nestjs/common'

import { AddImage, RemoveImage } from './provider'

@Module({
  providers: [AddImage, RemoveImage]
})
export class ImageModule {}
