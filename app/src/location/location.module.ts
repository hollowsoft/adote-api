import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { City } from './entity/city.entity'
import { LocationService } from './location.service'
import { LocationController } from './location.controller'

@Module({
  imports: [TypeOrmModule.forFeature([City])],
  providers: [LocationService],
  controllers: [LocationController],
})
export class LocationModule {}
