import { Routes, Route, Navigate} from 'react-router-dom';
import Nav from "./Nav"
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import Search from "./pages/Search"
import {  NavHome, NavProfile, NavSearch } from "./Topnav"


function App() {
 

  return (
    <>

    <Routes>

      <Route path="/" element={<Navigate to="/profile" />} />

      <Route path="/home"  element={<><NavHome /><Home /></>} />

      <Route path="/search"  element={<><NavSearch /><Search /></>} />

      <Route path="/profile"  element={<><NavProfile /><Profile /></>} />



    </Routes>
    <Nav />

    </>
  )
}

export default App
