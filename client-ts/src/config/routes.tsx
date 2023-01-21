import { Route, Routes } from "react-router-dom"
import Login from "../page/login"
import UserResultList from "../page/user-result-list"

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />}/>
            <Route path="home" element={<UserResultList/>} />
        </Routes>
    )
}

export default AppRoutes