import type { NestFastifyApplication } from '@nestjs/platform-fastify'

export class SpecApplication {
  private application: NestFastifyApplication

  getApplication(): NestFastifyApplication {
    return this.application
  }

  setApplication(application: NestFastifyApplication) {
    this.application = application
  }
}
