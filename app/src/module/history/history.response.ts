import { Gender } from '@/module/post/type/gender.enum'
import { Size } from '@/module/post/type/size.enum'

export class HistoryResponse {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly image: string,
    readonly age: number,
    readonly size: Size,
    readonly gender: Gender,
    readonly breed: string
  ) {}
}
