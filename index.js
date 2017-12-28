const Koa = require('koa');
const Router = require('koa-router');


app = new Koa();
app.use(async function (ctx, next) {
    var a = 1;
    await next(a);
})

app.use(async function (ctx, a) {
    ctx.body = "Hello World";
    console.log(a);
})

app.listen(3000, async function (port) {
    await console.log(port)
});