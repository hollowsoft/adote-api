import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { HistoryController } from './history.controller'
import { HistoryProvider } from './provider'
import { HistoryRepository } from './repository/history.repository'
import { History, HistorySchema } from './repository/history.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: History.name, schema: HistorySchema }])],
  providers: [HistoryProvider, HistoryRepository],
  controllers: [HistoryController]
})
export class HistoryModule {}
