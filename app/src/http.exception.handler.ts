import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from '@nestjs/common'

import { FastifyReply, FastifyRequest } from 'fastify'

@Catch(HttpException)
export class HttpExceptionHandler implements ExceptionFilter<HttpException> {
  private readonly logger = new Logger(HttpExceptionHandler.name)

  catch(e: HttpException, argument: ArgumentsHost) {
    this.logger.error(e)

    const context = argument.switchToHttp()

    const request = context.getRequest<FastifyRequest>()
    const response = context.getResponse<FastifyReply>()

    const code = e.getStatus()

    response.status(code).send({
      path: request.url,
      message: e.message,
      code
    })
  }
}
