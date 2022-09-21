import 'reflect-metadata'

import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify'

import helmet from '@fastify/helmet'

import { AppModule } from './app.module'

const load = async () => {
  const application = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(), { cors: true })

  await application.register(helmet)

  application.useGlobalPipes(new ValidationPipe())

  application.setGlobalPrefix('/api')

  await application.listen(process.env.PORT ?? 4000)
}

load()
