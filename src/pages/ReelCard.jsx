import Reel from "./Reel";
import { useEffect, useRef, useState } from "react"

import {IoMdHeartEmpty} from "react-icons/io";
import {FaRegComment} from "react-icons/fa";
import {HiMiniArrowPathRoundedSquare} from "react-icons/hi2";
import {CiLocationArrow1} from "react-icons/ci";
import {HiDotsHorizontal} from "react-icons/hi";
import {IoMusicalNotesSharp} from "react-icons/io5";

function ReelCard({


    
  src,
  username,
  music,
  avatar,
  description,
}) {

const textRef = useRef(null);

const [animateMusic, setAnimateMusic] = useState(false);


useEffect (() => {
    const textWidth = textRef.current.scrollWidth;
const containerWidth = textRef.current.parentElement.clientWidth;

  const el = textRef.current;
  
  if (!el) return;

  const distance = textWidth - containerWidth;


    console.log({
    scrollWidth: el.scrollWidth,
    clientWidth: el.clientWidth,
    distance,
  });


  if ( distance > 0) {
  setAnimateMusic(true);
  } else  {
    setAnimateMusic(false);
 }

  
}, [music]);



      return (
    <div className="reelContainer-play">
      <Reel
        src={src}
        className="reel-play"
      />

      <div className="like-buttons-play">
        <div className="play-button-icons">
          <IoMdHeartEmpty />
          <FaRegComment />
          <HiMiniArrowPathRoundedSquare />
          <CiLocationArrow1 />
          <HiDotsHorizontal className="driepuntenplay" />
        </div>

        <div className="minicontentstroke">
          <button className="minicirkelreeplay">
            <img
              src={avatar}
              alt={username}
              className="vogelbutton-play1"
            />
          </button>

          <div className="containerinclbutton">
            <div className="extradivreplay">
            <p className="mininamereelplay">
                {username}
             </p>

            <div className="trackplay">
                <IoMusicalNotesSharp className="musiciconplay" />

            <div className="music-wrapper">
                <span ref={textRef} className="measure-text">{music}

                </span>
      
            <div
                className={`track ${animateMusic ? "scrollmusic" : ""}`}>
         {animateMusic ? (
         <>
         <span>{music} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
         <span>{music} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
         </>
          ) : (
            <span>{music}</span>
          )}
         </div>
          </div>
              
              </div>
            </div>

            <button className="volgplaybutton">
              Volgen
            </button>
          </div>
        </div>

        <div className="lastcontainerreel">
          <div className="contentnamereplayfirst">
            <p className="contentnamereplay">
              {description}
            </p>
          </div>

          <button className="playbuttonvogel">
            <img
              src={avatar}
              alt={username}
              className="vogelbutton-play"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReelCard;