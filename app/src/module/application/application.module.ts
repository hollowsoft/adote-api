import { Module } from '@nestjs/common'
import { ControllerController } from './controller/controller.controller'
import { ApplicationProvider } from './application.provider'
import { ApplicationRepository } from './application.repository'
import { MongooseModule } from '@nestjs/mongoose'
import { LocationSchema } from '../location/location.type'
import { LoadLocation } from './provider/load.application'

@Module({
  imports: [MongooseModule.forFeature([LocationSchema])],
  controllers: [ControllerController],
  providers: [LoadLocation, ApplicationProvider, ApplicationRepository]
})
export class ApplicationModule {}
