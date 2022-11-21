# ts-express-tpl

## 1. 解决别名问题

nodemon配合tsconfig-paths实现

在nodemon.json配置文件中

    ts-node -r tsconfig-paths/register ./src/app.ts

如果发布在服务器上仍报错

安装module-alias

```js
//package.json

"_moduleAliases": {
  "@": "./dist"
},


// 生成的启动文件中顶部引入
require('module-alias/register')
```

## 连接数据库

使用typeorm

1. 在db文件夹下链接数据库
2. 在entity文件夹下编写表结构

## 配置环境变量

使用dotenv

在config文件夹下定义

定义完可以直接从process.env中取得环境变量

## jwt验证

使用express-jwt

## 日志记录

morgan

配置文件middleware/morgan.ts，记录请求日志

winston

配置文件utils/logger.ts，使用时引用文件logger.error(err)
