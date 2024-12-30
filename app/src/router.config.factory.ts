import type { Routes } from '@nestjs/core'

import { FavModule } from './module/fav/fav.module'
import { UserModule } from './module/user/user.module'

export const RouteConfig: Routes = [
  {
    path: '/',
    module: UserModule,
    children: [
      {
        path: 'fav',
        module: FavModule
      }
    ]
  }
]
