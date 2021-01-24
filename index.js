'use strict';
const Koa = require('koa');
const KoaRouter = require('koa-router');

const app = new Koa();
const router = new KoaRouter();


router.get('KOA', '/home', (ctx) => {
    ctx.body = "Welcome to the Koala Book of Evereything.."
    });

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(4000, ()=> console.log('running on port 4000'));
