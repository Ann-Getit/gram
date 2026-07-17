import "./Chatsection.css";
import { useState } from "react"

import { RiSearchAiLine } from "react-icons/ri";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";


const Chatsection = () => {

const [showButton, setShowButton] = useState(false);

const [showArrowChat, setShowArrowChat] = useState(false);



    return (
        <>
  <div className="chatsearch">
    {showArrowChat && (
    <IoIosArrowBack className="showklikarrow"/>
    )}
    <RiSearchAiLine className="searchicon"/>

    <input type="text"  
    placeholder= "Zoeken of vragen aan Meta AI" 
    className="inputesearch"
    onFocus={() => {
        setShowButton(true);
         setShowArrowChat(true);
    }}
     onBlur={() => {
    setShowButton(false);
    setShowArrowChat(false);
     }}
    />

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