import 'reflect-metadata'

import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify'

import cross from 'fastify-csrf'

import { fastifyHelmet as helmet } from 'fastify-helmet'

import { AppModule } from './app.module'

const load = async () => {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())

  await app.register(cross)
  await app.register(helmet)

  app.useGlobalPipes(new ValidationPipe())

  app.setGlobalPrefix('/api')

  await app.listen(process.env.PORT ?? 4000)
}

load()
