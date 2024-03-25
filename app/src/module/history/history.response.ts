import { Size, Gender } from '@/module/post/post.type'

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
