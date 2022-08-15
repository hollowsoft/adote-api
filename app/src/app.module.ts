import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { BreedModule } from './breed/breed.module'

// TODO: Review this
import config from './env'

@Module({
  imports: [TypeOrmModule.forRootAsync(config), BreedModule],
})
export class AppModule {}
