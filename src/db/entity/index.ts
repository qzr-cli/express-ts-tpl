import UsersEntity from './user.entity'
import dataSource from '@/db/dataSource'

export const UsersRepository = function () {
  return dataSource.getRepository(UsersEntity)
}
