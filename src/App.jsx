import { Routes, Route, Navigate} from 'react-router-dom';
import Nav from "./Nav"
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import Chatsection from "./pages/Chatsection"
import Play from "./pages/Play"
import Search from "./pages/Search"

import {  NavHome, NavPlay, NavChatsection, NavSearch, NavProfile} from "./Topnav"
import "./App.css"
import Test from "./pages/Test";
function App() {
 

  return (
    <>
     <div className="app">
    <Routes>

      <Route path="/" element={<Navigate to="/profile" />} />

      <Route path="/home"  element={<><NavHome /><Home /></>} />


         <Route path="/play"  element={<><NavPlay /><Play /></>} />

      <Route path="/chatsection"  element={<><NavChatsection /><Chatsection /></>} />

         <Route path="/search"  element={<><NavSearch /><Search /></>} />

      <Route path="/profile"  element={<><NavProfile /><Profile /></>} />



      <Route path="/test" element={<><NavHome /><Test /></>} />

    </Routes>

   </div>
      <Nav />
    </>
  )
}

export default App
