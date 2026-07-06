import "./Topnav.css"
import { Link, useLocation } from "react-router-dom"
import { FiPlus } from "react-icons/fi";
import { IoLockClosedOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { SiThreads } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdHeartEmpty } from "react-icons/io";
import { SlNote } from "react-icons/sl";


        export const NavHome = () => {

            return (
                <>
                <nav className="nav-home-page">
            <div className="top-nav-home">
                <ul>
                    <li className="plushome">
                        <Link to=""><FiPlus /></Link>
                    </li>
                    <li className="homenames">
                        <Link to="">Volgend<IoIosArrowDown className="IosArrowDown-home" /></Link>
                    </li>
                    <li className="hartjehome">
                        <Link to=""><IoMdHeartEmpty />
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
                </>
            )
        }

                export const NavPlay = () => {

            return (
                <>
                <nav className="nav-play-page">
            <div className="top-nav-play">
                <ul>
                    <li className="plushome">
                        <Link to=""><FiPlus /></Link>
                    </li>
                    <li className="playnames">
                        <Link to="">Reels<IoIosArrowDown className="IosArrowDown-play" /></Link>
                    </li>
                   
                    <li className="vriendenplay">
                        <Link to="">Vrienden
                         <div className="triplecirkelplay">
                        <img src="./pics/vogel-unsplash.jpg" className="playcirkelspic"/>
                        <img src="./pics/vogel-unsplash.jpg" className="playcirkelspic"/>
                        <img src="./pics/vogel-unsplash.jpg" className="playcirkelspic"/>
                        
                        </div>
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
                </>
            )
        }



         export const NavChatsection = () => {

            return (
                <>
                       <nav className="nav-home-page">
            <div className="top-nav-home">
                <ul>
                    <li className="plushome">
      
                    </li>
                    <li className="homenames">
                        <Link to="">profilenamenX<IoIosArrowDown className="IosArrowDown-home" /></Link>
                    </li>
                    <li className="hartjehome">
                        <Link to=""><SlNote />
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
                </>
            )
        }



         export const NavSearch = () => {

            return (
                <>
                       <nav className="nav-home-page">
            <div className="top-nav-home">
                <ul>
                    <li className="plushome">
      
                    </li>
                    <li className="homenames">
                        <Link to="">Searchside<IoIosArrowDown className="IosArrowDown-home" /></Link>
                    </li>
                    <li className="hartjehome">
                        <Link to=""><SlNote />
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
                </>
            )
        }




export const NavProfile = () => {
    return (
        <>
         <nav className="nav-profile-page">
            <div className="top-nav-profile">
                <ul>
                    <li className="home-plus-Li">
                        <Link to=""><FiPlus className="plusprofile"/></Link>
                    </li>
                    <li className="profilenames">
                        <Link to=""><IoLockClosedOutline className="LockCloseOutline"/>profilenameX<IoIosArrowDown className="IosArrowDown" /></Link>
                    </li>
                    <li className="profile-threadcont">
                        <Link to="https://www.threads.com/?hl=en"><SiThreads className="profilethreads"/>
                        </Link>
                    </li>
                    <li className="profile-hamburger">
                        <Link to=""><RxHamburgerMenu className="hamburgerMenuprofile"/></Link>
                    </li>

                </ul>
            </div>
        </nav>
        </>
    );
}







export default { NavHome, NavPlay, NavChatsection, NavSearch, NavProfile };