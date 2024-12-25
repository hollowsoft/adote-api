import { Catch, HttpException, Logger, type ArgumentsHost, type ExceptionFilter } from '@nestjs/common'

import type { FastifyReply, FastifyRequest } from 'fastify'

@Catch(HttpException)
export class HttpExceptionHandler implements ExceptionFilter<HttpException> {
  private readonly logger = new Logger(HttpExceptionHandler.name)

  catch(e: HttpException, argument: ArgumentsHost) {
    this.logger.error(e)

    const context = argument.switchToHttp()

    const request = context.getRequest<FastifyRequest>()
    const response = context.getResponse<FastifyReply>()

    const status = e.getStatus()

    response.status(status).send({
      path: request.url,
      message: e.message,
      status
    })
  }
}
