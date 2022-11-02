import express, { type Router } from 'express'
const router: Router = express.Router()

// 增加用户
router.post('/addUser', function (req, res, next) {
  res.status(200).send('Hello Shinp!!!')
})
// 获取全部用户
router.get('/queryAll', function (req, res, next) {
  res.status(200).send('Hello Shinp!!!')
})
// 删除用户
router.post('/deleteUser', function (req, res, next) {
  res.status(200).send('Hello Shinp!!!')
})

export default router
