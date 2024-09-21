import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { HistoryController } from './history.controller'
import { HistoryRepository } from './history.repository'
import { HistorySchema } from './history.type'
import { HistoryProvider } from './provider'

@Module({
  imports: [MongooseModule.forFeature([HistorySchema])],
  providers: [HistoryProvider, HistoryRepository],
  controllers: [HistoryController]
})
export class HistoryModule {}
