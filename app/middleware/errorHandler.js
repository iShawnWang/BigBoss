module.exports = () => {
  return async function errorHandler(ctx, next) {
    await next()
    if (ctx.status === 404 && !ctx.body) {
      if (ctx.acceptJSON) {
        ctx.body = { msg: 404 }
      } else {
        await ctx.render('404.pug')
      }
    }
    if (ctx.status === 500 && !ctx.body) {
      if (ctx.acceptJSON) {
        ctx.body = { msg: 500 }
      } else {
        await ctx.render('500.pug')
      }
    }
  }
}
