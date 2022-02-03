import { AppModule } from './app.module'
import { NestFactory } from '@nestjs/core'

const load = async () => {
  const app = await NestFactory.create(AppModule)

  await app.listen(4000)
}

load()
