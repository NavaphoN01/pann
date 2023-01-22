import {Route, Routes, useLocation, Navigate} from "react-router-dom"
import { useAppCtx } from "../AppProvider"
import Login from "../page/login"
import UserResultList from "../page/user-result-list"
import AnnouncementList from "../page/announcement-list"
import { useEffect } from "react"

type Props = {
    staffOnly?: boolean
    children: JSX.Element
}

const ProtectedRoute = ({staffOnly, children}: Props) => {
    const {userInfo, action} = useAppCtx()
    const location = useLocation()
    const redirectToLogin = () => {
        action.signOut()
        console.log('backTo = ', location.pathname)
        return <Navigate to="/login" replace state={{backTo: location.pathname}}/>
    
    }

    useEffect(() => {
        if (!userInfo.ready || (staffOnly && !action.isStaff())) {
          redirectToLogin()
        }
      }, [userInfo.ready, staffOnly])
    
    return children
}

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />}/>
            <Route path="home" element={<ProtectedRoute><UserResultList/></ProtectedRoute>} />
            <Route path='announcement' element={<ProtectedRoute staffOnly={true}><AnnouncementList/></ProtectedRoute>}/>
        </Routes>
    );
};

export default AppRoutes