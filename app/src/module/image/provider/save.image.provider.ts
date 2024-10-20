import { ConfigService } from '@nestjs/config'

import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'

export class SaveImageProvider {
  private readonly client = new S3Client()

  constructor(private readonly config: ConfigService) {}

  async run(name: string, location: string, image: any): Promise<void> {
    const param = {
      Key: `${location}/${name}`,
      Body: image,
      Bucket: this.config.get<string>('')
    }

    await this.client.send(new PutObjectCommand(param))
  }
}
