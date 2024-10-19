import { Kind } from '../type/kind.enum'

export class SaveBreed {
  readonly name: string
  readonly kind: Kind

  constructor(name: string, kind: Kind) {
    this.name = name
    this.kind = kind
  }
}
