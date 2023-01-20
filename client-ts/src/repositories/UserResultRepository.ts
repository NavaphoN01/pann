import { IRepository } from "./IRepository";
import UserResult from "../model/UserResult";

export class UserResultRepotiory implements IRepository<UserResult> {
    async getAll(): Promise<UserResult[] | null> {
        return [
            {
                id: 3,
                announcement: {
                    id: 2,
                    topic: "ทุนเรียนดีประจำปี 2566",
                    description: "test",
                    remarkIfPositive: "ขอแสดงความยินดีกับผุ้ได้รับทุนเรียนดีทุกคนด้วย",
                    pubDateTime:new Date("2022-09-09 08:00:00")
                },
                result: "ได้รับทุน",
                resultType: 1,
                remark: "",
                isPinned: false,
                viewDateTime: new Date('2022-09-08 14:12:31'),
                ackDateTime: new Date('2022-09-08 14:13:31'),
                updateDateTime: new Date('2022-09-07 09:12:31'),
                expireDateTime: new Date('2022-09-15 14:12:31'),
                userCode: '6210110227'
            }
        ]
    }
}
