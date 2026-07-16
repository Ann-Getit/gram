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

  const el = textRef.current;

  if (!el) return;

  const distance = el.scrollWidth - el.clientWidth;


    console.log({
    scrollWidth: el.scrollWidth,
    clientWidth: el.clientWidth,
    distance,
  });



  el.style.setProperty("--scroll-distance", `-${distance}px`);



   setAnimateMusic(distance > 0);
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

              <div className="music-wrapper" ref={textRef}>
                <span
    className={`music-text ${animateMusic ? "scrollmusic" : ""}`} 
    >
                {music}
                </span>
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