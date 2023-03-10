import { display } from '@mui/system'
import React from 'react'
import { Routes, Route } from "react-router-dom"
import Footer from './common/Footer/Footer'
import Header from './common/Header/Header'
import Chats from './screens/chats/Chats'
import Experts from './screens/home/Experts/Experts'
import Home from './screens/home/Home'

export default function App() {
  return (
    <div className='App' style={{width:"100%" , height: "100%" ,display:"block"}}>
      <Header/>
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="chats" element={ <Chats/> } />
        <Route path="experts" element={ <Experts/> } />
      </Routes>
      
    </div>
  )
}
