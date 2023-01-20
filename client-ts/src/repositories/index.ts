import { AnnouncementRepository } from "./AnnouncementRepository";
import { UserResultRepotiory } from "./UserResultRepository";

const repositories = {
    announcements: new AnnouncementRepository(),
    userResult: new UserResultRepotiory()
}

export default repositories