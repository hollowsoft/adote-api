import { FastifyAdapter, type NestFastifyApplication } from '@nestjs/platform-fastify'
import { Test } from '@nestjs/testing'

import { HealthModule } from '@/module/health/health.module'

import { SpecApplication } from './spec.application'

describe('Health Module', () => {
  const spec = new SpecApplication()

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [HealthModule]
    }).compile()

    const application = module.createNestApplication<NestFastifyApplication>(new FastifyAdapter())

    await application.init()

    await application.getHttpAdapter().getInstance().ready()

    spec.setApplication(application)
  })

  it('health', async () => {
    const { statusCode: status } = await spec.getApplication().inject({
      url: '/health',
      method: 'get'
    })

    expect(status).toEqual(200)
  })
})
