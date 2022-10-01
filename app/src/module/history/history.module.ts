import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { History } from './entity/history.entity'
import { HistoryRepository } from './history.repository'

import { HistoryService } from './history.service'
import { ListHistoryService } from './service/list.history.service'

import { HistoryController } from './history.controller'

@Module({
  imports: [TypeOrmModule.forFeature([History])],
  providers: [
    HistoryRepository,
    HistoryService,
    ListHistoryService
  ],
  controllers: [HistoryController],
})
export class HistoryModule {}
