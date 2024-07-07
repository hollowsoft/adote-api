import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { HistorySchema } from './history.type'
import { HistoryRepository } from './history.repository'

import { HistoryProvider } from './provider'
import { HistoryController } from './history.controller'

@Module({
  imports: [MongooseModule.forFeature([HistorySchema])],
  providers: [HistoryProvider, HistoryRepository],
  controllers: [HistoryController]
})
export class HistoryModule {}
