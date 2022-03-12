import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UserModule } from './user/user.module'
import { BreedModule } from './breed/breed.module'

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, BreedModule],
})
export class AppModule {}
