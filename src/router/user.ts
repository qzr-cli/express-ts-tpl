import express, { type Router } from 'express'
import { UserController } from '@/controller'

const router: Router = express.Router()

// 增加用户
router.post('/addUser', UserController.addUser)
// 获取全部用户
router.get('/queryAll', function (req, res, next) {
  res.status(200).send('Hello Shinp1!!!')
})
// 删除用户
router.post('/deleteUser', function (req, res, next) {
  res.status(200).send('Hello Shinp!!!')
})

export default router
