import Router from 'koa-router'

const apiRouter = new Router()

apiRouter.get('/api/greet', (ctx,next) => {
    ctx.body = {msg: 'Hello world'}
})

export default apiRouter
