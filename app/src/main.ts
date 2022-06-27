import 'reflect-metadata'

import { NestFactory } from '@nestjs/core'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'

import { ValidationPipe } from '@nestjs/common'

import { AppModule } from './app.module'

const load = async () => {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())

  app.setGlobalPrefix('api')

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(4000)
}

load()
