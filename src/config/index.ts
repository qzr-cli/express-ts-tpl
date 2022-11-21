/*
 * @Date         : 2022-11-02 17:17:32
 * @Description  : 配置环境变量 可直接通过process.env访问变量
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2022-11-09 09:16:06
 */

import { config } from 'dotenv'

config({ path: `.env.${process.env.NODE_ENV || 'dev'}.local` })
