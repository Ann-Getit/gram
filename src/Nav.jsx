import "./Nav.css";
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { BsPersonCircle } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import { LuSquarePlay } from "react-icons/lu";

const Nav = () => {
    const [showLocations, setShowLocations] = useState(false);
    return (
        <>
              <nav className="whole-bottom-nav-content">

            <div className="main-bottom-nav">
                <ul>
                    <li>
                        <Link to="/home" ><IoHomeOutline /></Link>
                    </li>
                     <li>
                        <Link to="/play" ><LuSquarePlay />
                        </Link>
                    </li>
                     <li>
                        <Link to="/chatsection" ><CiLocationArrow1 /></Link>
                    </li>
                     <li>
                        <Link to="/search" ><IoMdSearch /></Link>
                    </li>
                     <li>
                        <Link to="/profile"><BsPersonCircle /></Link>
                    </li>
                </ul>
            </div>

        </nav>

        </>
    )
}
export default Nav;