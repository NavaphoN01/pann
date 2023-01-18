import Router from "koa-router";

const router = new Router()

router
    .get('/', (ctx,next) => {
        ctx.body = [
            { id: 1, topic: '240-124 Midterm 1/2566', description: 'คะแนน Assignment ชิ้นที่ 1', pubDateTime: '2022-12-21 10:30:00', userCode: 'suthon.s'},
            { id: 2, topic: 'ทุนเรียนดีประจำปี 2567', description: 'test 123', remarkIfPositive: 'Congrat for everyone', pubDateTime: '2022-12-10 15:40:00', userCode: 'suthon.s'}
        ]
    })
export default router
