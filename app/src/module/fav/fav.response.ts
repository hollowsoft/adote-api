import { Size } from '@/module/post/type/size.enum'
import { Gender } from '@/module/post/type/gender.enum'
import { HttpStatus } from '@nestjs/common'

export class AddFavResponse {
  constructor(readonly status: HttpStatus) {}
}

export class FavResponse {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly image: string[],
    readonly pet: PetResponse,
    readonly location: LocationResponse
  ) {}
}

class PetResponse {
  constructor(
    readonly name: string,
    readonly age: [number, number],
    readonly size: Size,
    readonly gender: Gender
  ) {}
}

class LocationResponse {
  constructor(
    readonly city: string,
    readonly state: string
  ) {}
}
