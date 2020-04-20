const Koa = require('koa');
const logger = require('koa-logger');
const serve = require('koa-static');
const views = require('koa-views');

const router = require('./router/router');

const app = new Koa();
app.use(serve(__dirname));

//set ejs for template
app.use(views(__dirname + '/view', {     
    extension: 'ejs' 
}));

// middleware
app.use(logger());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);