import { UsersRepository } from '@/db/entity'
import logger from '@/utils/logger'

export default {
  addUser(req, res) {
    UsersRepository().save({
      username: 'aaa',
      isDelete: false,
      role: 'author',
      password: '123123123'
    })

    logger.error('testttt')
    res.status(200).send('Hello Shinp!!!')
  }
}
