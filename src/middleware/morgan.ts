/*
 * @Date         : 2022-11-08 16:50:43
 * @Description  : 配置请求日志 保存每一条请求记录
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2022-11-09 09:17:47
 */

import morgan from 'morgan'
import fs from 'fs'
import path from 'path'

export default function (app) {
  let accessLogStream = fs.createWriteStream(path.join(__dirname, '../../logs/request.log'), { flags: 'a', encoding: 'utf8' })
  app.use(morgan('combined', { stream: accessLogStream }))
}
