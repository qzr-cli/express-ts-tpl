import express, { type Router } from 'express'
import dataSource from '@/database/dataSource'
import Users from '@/entity/user.entity'

const router: Router = express.Router()

// 增加用户
router.post('/addUser', function (req, res) {
  dataSource.getRepository(Users).save({
    username: 'aaa',
    isDelete: false,
    role: 'author',
    password: '123123123'
  })
  res.status(200).send('Hello Shinp!!!')
})
// 获取全部用户
router.get('/queryAll', function (req, res, next) {
  res.status(200).send('Hello Shinp1!!!')
})
// 删除用户
router.post('/deleteUser', function (req, res, next) {
  res.status(200).send('Hello Shinp!!!')
})

export default router
