export class UserResponse {
  constructor(
    readonly id: string,
    readonly mail: string,
    readonly name: string,
    readonly image: string,
    readonly description: string,
    readonly contact: ContactResponse,
    readonly location: LocationResponse
  ) {}
}

class ContactResponse {
  constructor(
    readonly mail: string,
    readonly phone: string,
    readonly social: string
  ) {}
}

class LocationResponse {
  constructor(
    readonly id: string,
    readonly city: string,
    readonly state: string
  ) {}
}
