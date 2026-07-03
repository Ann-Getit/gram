import "./Profile.css";
/*import { Link } from "react-router-dom"*/

import { TbCameraPlus } from "react-icons/tb";


const Profile = () => {

    return (
        <>
       




       <div className="profilepic-and-followers">

        <div className="profile_picture">
            <button><TbCameraPlus /></button>
        </div>

        <div className="followers">

        </div>

       </div>
        </>
    )
}
export default Profile;