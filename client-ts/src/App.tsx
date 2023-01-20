import Repo from './repositories'
import { useEffect ,useState } from 'react';
import Announcement from './model/Announcement';
import UserResult from './model/UserResult';

function App() {
  const [announcementList, setAnnouncementList] = useState<Announcement[]>([])
  const [userResultList, setuserResultList] = useState<UserResult[]>([])

  const fetchannouncementList = async () => {
    const result = await Repo.announcements.getAll()
    if(result){
      setAnnouncementList(result)
    }
  }
 const fetchuserResultList = async () => {
    const result = await Repo.userResult.getAll()
    if(result){
      setuserResultList(result)
    }
  }

  useEffect(() => {
    fetchannouncementList()
    fetchuserResultList()
  })

  return (
    <div>
    {announcementList.map(announcement => (
      <div key={announcement.id}>
        <p>ID : {announcement.id}</p>
        <p>Description : {announcement.description}</p>
        <p>Positive : {announcement.remarkIfPositive}</p>
        <p>Negative : {announcement.remarkIfNegative}</p>
        <p>Time : {announcement.pubDateTime.toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          })}</p>
        <p>UserCode : {announcement.userCode}</p>
      </div>
    ))}
          <hr />
      <div>
        {userResultList.map(userResult => (
          <div key={userResult.id}>
            <p>ID : {userResult.id}</p>
            <p>Topic : {userResult.announcement.topic}</p>
            <p>Result : {userResult.result}</p>
            <p>UserCode : {userResult.userCode}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
