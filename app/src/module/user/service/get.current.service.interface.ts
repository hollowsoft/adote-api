import { UserResponse } from '../response'

export interface IGetCurrentService {
  run(id: string): Promise<UserResponse>
}
