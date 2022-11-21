/*
 * @Date         : 2022-11-08 17:31:19
 * @Description  : 配置logger文件 调用logger.error()
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2022-11-09 09:16:39
 */

import { createLogger, format, transports } from 'winston'
import path from 'path'

let { combine, timestamp, printf } = format

let myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} ${level}: ${message}`
})

let logger = createLogger({
  level: 'error',
  format: combine(timestamp(), myFormat),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(__dirname, '../../logs/error.log')
    })
  ]
})

export default logger
