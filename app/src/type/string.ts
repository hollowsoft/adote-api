import { Types } from 'mongoose'

declare global {
  interface String {
    ObjectId: Types.ObjectId
  }
}

String.prototype.ObjectId = new Types.ObjectId(String(this))
