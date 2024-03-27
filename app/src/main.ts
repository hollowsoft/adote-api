import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'

import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'

import helmet from '@fastify/helmet'
import compress from '@fastify/compress'

import { AppModule } from './app.module'

(async () => {
  const application = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
    { cors: true }
  )

  await application.register(helmet)
  await application.register(compress)

  application.setGlobalPrefix('/api')

  application.useGlobalPipes(new ValidationPipe({ transform: true }))

  await application.listen(process.env.PORT ?? 8000, '0.0.0.0')
})()
