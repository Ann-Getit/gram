import "./Play.css";
import Reel from "./Reel"

const Play = () => {
    return (
        <>
        <div className="play-page">
            <div className="reelContainer-play">
            <Reel src="./videos/ai-reel8.mp4" type="video/mp4" className="reel-play" />
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