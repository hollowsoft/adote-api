import { Size } from '../post/size.enum'
import { Gender } from '../post/gender.enum'

export class HistoryResponse {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly image: string,
    readonly age: [number, number],
    readonly size: Size,
    readonly gender: Gender,
    readonly breed: string
  ) {}
}
