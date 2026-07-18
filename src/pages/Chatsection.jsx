import "./Chatsection.css";
import { useState } from "react"
import { Link } from "react-router-dom"
import { RiSearchAiLine } from "react-icons/ri";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { IoPersonCircleSharp } from "react-icons/io5";
import { GoBellSlash } from "react-icons/go";

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


    <div className="chatlist">
        <div className="verhaalboxjeschat">
            <button className="cloudtext-chat" >
            <span>Type iets..</span> {/*meerdere tekst toevoegen*/}
            </button>
                    <button className="verhaalvoegenchat">
                        <IoPersonCircleSharp className="person-icon-verhaal"/>
                    </button>
                    <span className="names-homechat">je notitie</span>
                    </div>
    </div>

    <div className="verzoekchat">
        <div>
            <p className="chatbericht-chat">Chatberichten <GoBellSlash className="nobell"/></p>
        </div>

        <div>
            <Link to="#" >Verzoeken</Link>
        </div>
    </div>

    <div className="lists-chat">
        
    </div>
        </>
    )
}
export default Chatsection;