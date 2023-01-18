import Router from 'koa-router'
import announcement from './announcement'
import userResult from './user_result'

const apiRouter = new Router()

apiRouter.get('/api/greet', (ctx,next) => {
    ctx.body = {msg: 'Hello world'}
})

apiRouter.use('/api/announcement',announcement.routes())
apiRouter.use('/api/userResult',userResult.routes())


export default apiRouter
