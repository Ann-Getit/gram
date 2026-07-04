import "./Profile.css";
/*import { Link } from "react-router-dom"*/

import { IoCamera } from "react-icons/io5";
import { IoPersonAddSharp } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { LuSquarePlay } from "react-icons/lu";
import { BsPersonSquare } from "react-icons/bs";
import { PiArrowsClockwiseBold } from "react-icons/pi";

const Profile = () => {

    return (
        <>
        <div className="profile-page">
       <div className="profilepic-and-followers">
        
        <div className="profile_picture">

            <button className="cloudtext-button" >
            <span>Type iets..</span>
            </button>


            <button className="profile-camera-button">
                <IoCamera />
            </button>
        </div>


        <div className="followers">
            <button className="followers-profile">
                <span className="totaal">0</span>
                <span className="tekst-profile">berichten</span>
            </button>

             <button className="followers-profile">
                <span className="totaal">30</span>
                <span className="tekst-profile">volgers</span>
            </button>

             <button className="followers-profile">
                <span className="totaal">29</span>
                <span className="tekst-profile" >volgend</span>
            </button>

        </div>
       </div>


       <div className="profile-instelling">
        <div className="banners-profile">
        <button className="banners-button"><GoPlus className="plus-profile-banner" /> Banners toevoegen</button>
        </div>
        <div className="profile-3buttons">
        <button className="button2of3"> Bewerken</button>
        <button className="button2of3"> Profiel delen</button>
        <button className="button1of3"><IoPersonAddSharp /></button>
        </div>
       </div>





       <div className="slidebutton-profile">
        <button className="slidebutton-each">
            <BsFillGrid3X3GapFill />
        </button>

        <button className="slidebutton-each2">
            <LuSquarePlay/>
            </button>

             <button className="slidebutton-each">
            <PiArrowsClockwiseBold />
        </button>

        <button className="slidebutton-each">
            <BsPersonSquare />
        </button>
       </div>




       <div className="content-profile-side">
       <div className="own-profile-content">
    <p>ujyfhbtghtgh</p>
       </div>
       <div className="own-profile-content"></div>
       <div className="own-profile-content"></div>
       <div className="own-profile-content"></div>
       <div className="own-profile-content"></div>
       <div className="own-profile-content"></div>
       <div className="own-profile-content"></div>
       <div className="own-profile-content"></div>
       <div className="own-profile-content"></div>
       <div className="own-profile-content"></div>
       <div className="own-profile-content"></div>
       <div className="own-profile-content"></div>

       </div>
       </div>
        </>
    )
}
export default Profile;