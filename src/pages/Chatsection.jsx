import "./Chatsection.css";
import { useState } from "react"

import { RiSearchAiLine } from "react-icons/ri";
import { CiLocationArrow1 } from "react-icons/ci";
const Chatsection = () => {

const [showButton, setShowButton] = useState(false);

    


    return (
        <>
  <div className="chatsearch">
       <RiSearchAiLine className="searchicon"/>

    <input type="text"  placeholder= "Zoeken of vragen aan Meta AI" 
    onFocus={() => setShowButton(true)}
  onBlur={() => setShowButton(false)}
    className="inputesearch"/> 

     {showButton && (
    <div>
    |<button 
    
    className="buttonarrowchat">
   <CiLocationArrow1 className="arrowforinput" />
   </button>
   </div>)}

    </div>
        </>
    )
}
export default Chatsection;