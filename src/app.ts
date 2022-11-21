import express from 'express'
import router from './router' // 路由
import './config'
import databaseInit from './db'
import JWT from '@/middleware/jwt'
import Morgan from '@/middleware/morgan'
// import CROS from '@/config/CROS'

databaseInit()

const PORT = process.env.PORT
const app = express()

app.use(express.json())
// 通过 express.urlencoded() 这个中间件，来解析表单中的 url-encoded 格式的数据
app.use(express.urlencoded({ extended: false }))

JWT(app)
Morgan(app)
// CROS(app)  // 配置跨域

router(app)

// 启动
app.listen(PORT, async () => {
  console.log(`App is running at http://localhost:${PORT}`)
})
