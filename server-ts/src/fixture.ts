import db from "./db";

async function loadFixtures(clearData = false) {
    if(clearData){
        console.warn('clearing data')
        await db('userResult').del()
        await db('announcement').del()
    }

    await db.batchInsert('announcement', [
        { id: 1, topic: '240-124 Midterm 1/2566', description: 'คะแนน Assignment ชิ้นที่ 1', pubDateTime: '2022-12-21 10:30:00', userCode: 'suthon.s'},
        { id: 2, topic: 'ทุนเรียนดีประจำปี 2567', description: 'test 123', remarkIfPositive: 'Congrat for everyone', pubDateTime: '2022-12-10 15:40:00', userCode: 'suthon.s'}
    ])

    await db.batchInsert('user_result', [
        { id: 1, announcementId: 1, result: '24.5', remark: 'โดนหักคะแนนจากการเข้าสอบสาย', updateDateTime: '2022-09-07 09:12:31', userCode: '6210110010'},
        { id: 2, announcementId: 1, result: '30.1', updateDateTime: '2022-09-07 11:12:00', userCode: '6210110227'},
        { id: 3, announcementId: 2, result: 'ได้รับทุน', remark: '', resultType: 1,  updateDateTime: '2022-09-08 10:12:30', userCode: '6210110227'}
    ])
}

export default loadFixtures
