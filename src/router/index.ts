import userRouter from './user'

export default function (app) {
  app.use('/user', userRouter)
}
