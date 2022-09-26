import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { History } from './entity/history.entity'
import { HistoryRepository } from './history.repository'

import { HistoryService } from './history.service'
import { ListHistoryCase } from './case/list.history.case'

import { HistoryController } from './history.controller'

@Module({
  imports: [TypeOrmModule.forFeature([History])],
  providers: [
    HistoryService,
    HistoryRepository,
    ListHistoryCase
  ],
  controllers: [HistoryController],
})
export class HistoryModule {}
