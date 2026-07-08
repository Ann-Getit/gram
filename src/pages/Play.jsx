import "./Play.css";
import Reel from "./Reel"
import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegComment } from "react-icons/fa6";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import { CiLocationArrow1 } from "react-icons/ci";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoMusicalNotesSharp } from "react-icons/io5";

const Play = () => {
    return (
        <>  
        <div className="play-page">
            <div className="reelContainer-play">

            <Reel src="./videos/ai-reel8.mp4" type="video/mp4" className="reel-play" />
            <div className="like-buttons-play">
                <div className="play-button-icons">
                <IoMdHeartEmpty /> <FaRegComment /> <HiMiniArrowPathRoundedSquare /> <CiLocationArrow1 />
                <HiDotsHorizontal />
                <button className="playbuttonvogel"><img src="./pics/vogel-unsplash.jpg" className="vogelbutton-play"/></button>
            </div>
            <div className="minicontentstroke">
                <button className="minicirkelreeplay"><img src="./pics/vogel-unsplash.jpg" className="vogelbutton-play1"/></button>
                <div className="extradivreplay">
                <p className="mininamereelplay">natalieJosephinex</p>
                <p className="minimusicreelplay">
                    <IoMusicalNotesSharp className="musiciconplay"/> Kanye West - Flashing Lights</p>
                </div>
            </div>
            </div>
            </div>
            

            <div className="reelContainer-play">
            <Reel src="./videos/ai-reel9.mp4" className="reel-play" type="video/mp4" />
            </div>
            <div className="reelContainer-play">
            <Reel src="./videos/ai-reel7.mp4" type="video/mp4" className="reel-play" />
            </div>
            <div className="reelContainer-play">
            <Reel src="./videos/ai-reel4.mp4" type="video/mp4" className="reel-play" />
            </div>
            <div className="reelContainer-play">
            <Reel src="./videos/ai-reel7.mp4" type="video/mp4" className="reel-play" />
            </div>
            <div className="reelContainer-play">
            <Reel src="./videos/ai-reel4.mp4" type="video/mp4" className="reel-play" />
            </div>
            <div className="reelContainer-play">
            <Reel src="./videos/ai-reel8.mp4" type="video/mp4" className="reel-play" />
            </div>
            <div className="reelContainer-play">
            <Reel src="./videos/ai-reel9.mp4" className="reel-play" type="video/mp4" />
            </div>
            <div className="reelContainer-play">
            <Reel src="./videos/ai-reel7.mp4" type="video/mp4" className="reel-play" />
            </div>
        </div>
        </>
    )
}
export default Play;