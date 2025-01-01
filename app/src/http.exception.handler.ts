import { Catch, HttpException, Logger, type ArgumentsHost, type ExceptionFilter } from '@nestjs/common'

import type { FastifyReply, FastifyRequest } from 'fastify'

@Catch(HttpException)
export class HttpExceptionHandler implements ExceptionFilter<HttpException> {
  private readonly logger = new Logger(HttpExceptionHandler.name)

  catch(e: HttpException, t: ArgumentsHost) {
    this.logger.error(e)

    const status = e.getStatus()

    const request = t.switchToHttp().getRequest<FastifyRequest>()

    const response = t.switchToHttp().getResponse<FastifyReply>()

    response.status(status).send({
      path: request.url,
      message: e.message,
      status
    })
  }
}
