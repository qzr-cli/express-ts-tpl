# ts-express-tpl

## 解决别名问题

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
