/**
 * Created by ZYF on 2017/10/31.
 */
const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const app = new Koa();

const controller = require('./controller');

app.use(bodyparser());
app.use(controller()); // 如果不传参数，扫描目录默认为'controllers'

app.listen(3000);
console.log('listening port 3000');

// 命令行运行node app.js 浏览器中输入localhost:3000访问