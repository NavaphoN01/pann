import { Route, Routes } from "react-router-dom"

import Login from "../page/login"

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />}/>
        </Routes>
    )
}

export default AppRoutes