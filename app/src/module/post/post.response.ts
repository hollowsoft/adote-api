import { Size, Gender } from './post.type'

export class PublishPostResponse {
  constructor(
    readonly id: string,
    readonly publish: boolean
  ) {}
}

export class PostResponse {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly description: string,
    readonly image: string[],
    readonly pet: PetResponse,
    readonly user: UserResponse,
    readonly location: LocationResponse
  ) {}
}

export class PetResponse {
  constructor(
    readonly name: string,
    readonly age: [number, number],
    readonly size: Size,
    readonly gender: Gender,
    readonly breed: string
  ) {}
}

class BreedResponse {
  constructor(
    readonly id: string,
    readonly name: string
  ) {}
}

export class UserResponse {
  constructor(
    readonly name: string,
    readonly image: string,
    readonly description: string,
    readonly contact: ContactResponse
  ) {}
}

class ContactResponse {
  constructor(
    readonly mail: string,
    readonly phone: string,
    readonly social: string
  ) {}
}

export class LocationResponse {
  constructor(
    readonly id: string,
    readonly city: string,
    readonly state: string
  ) {}
}
