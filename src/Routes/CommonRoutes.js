import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login/UserLogin'
import DashBoard from "../Components/DashBoard"

function CommonRoutes() {
  
  return (
        <Routes>
              <Route path="/" element={<Login />}> </Route>
              <Route path="/dashBoard" element={<DashBoard />}></Route>
        </Routes>
      )
}

export default CommonRoutes