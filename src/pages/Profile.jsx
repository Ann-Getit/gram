import "./Profile.css";
/*import { Link } from "react-router-dom"*/

import { IoCamera } from "react-icons/io5";

import { HiMiniChatBubbleLeft } from "react-icons/hi2";

const Profile = () => {

    return (
        <>
       




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




           {/*} <div className="profilepic-and-followers">
        
        <div className="profile_picture">

            <input type="text" placeholder="Typ iets..." className="bubble" />
            <HiMiniChatBubbleLeft  className="bubbles-tekst-profile"/>
            <button><IoCamera /></button>
        </div>

        <div className="followers">

        </div>

       </div>*/}
        </>
    )
}
export default Profile;