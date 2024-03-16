import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { History } from './history.entity'
import { HistoryRepository } from './history.repository'

import { HistoryProvider } from './history.provider'

import { HistoryController } from './history.controller'

@Module({
  imports: [TypeOrmModule.forFeature([History])],
  providers: [HistoryProvider, HistoryRepository],
  controllers: [HistoryController]
})
export class HistoryModule {}
