import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthMailRequest } from './request/auth.mail.request'

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post()
  async auth(@Body() request: AuthMailRequest) {
    const { mail } = request
    
    return []
  }
}
