import express from 'express'
import router from './router' // 路由

const PORT = 1337
const app = express()

app.use(express.json())

router(app)

// 启动
app.listen(PORT, async () => {
  console.log(`App is running at http://localhost:${PORT}`)
})
