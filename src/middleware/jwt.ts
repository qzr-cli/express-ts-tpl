/*
 * @Date         : 2022-11-08 14:18:32
 * @Description  : 配置jwt中间件
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2022-11-09 09:17:26
 */

import { expressjwt } from 'express-jwt'

export default function (app) {
  app.use(
    expressjwt({
      secret: 'CONSTQ',
      algorithms: ['HS256']
    }).unless({
      // 除了以下这些 URL，其他的URL都需要验证
      path: ['/login', /^\/user\/.*/, /^\/static\/.*/]
    })
  )
}
