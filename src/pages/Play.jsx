import "./Play.css";
/*import Reel from "./Reel"*/
import ReelCard from "./ReelCard";


const reels = [
  {
    id: 1,
    src: "./videos/ai-reel8.mp4",
    username: "natalieJosephinex",
    music: "Kanye West - Flashing Lightshalloh",
    avatar: "./pics/vogel-unsplash.jpg",
    description: "Vacation in Bali #indo 🗺️🗺️",
    /*likes: 1200,
    comments: 84,*/
  },
  {
    id: 2,
    src: "./videos/ai-reel9.mp4",
    username: "johnsmith",
    music: "Drake - Passionfruit",
    avatar: "./pics/vogel-unsplash.jpg",
    description: "Beautiful sunset 🌅",
    /*likes: 850,
    comments: 32,*/
  },
];

const Play = () => {
    return (
     
    <div className="play-page">
      {reels.map((reel) => (
        <ReelCard
          key={reel.id}
          src={reel.src}
          username={reel.username}
          music={reel.music}
          avatar={reel.avatar}
          description={reel.description}
        />
      ))}
    </div>
    );
};

export default Play;





    {/*<div className="reelContainer-play">
      <Reel src={src} className="reel-play" />


      <div className="like-buttons-play">
        <div className="play-button-icons">
                <IoMdHeartEmpty /><FaRegComment /> <HiMiniArrowPathRoundedSquare /><CiLocationArrow1 />
                <HiDotsHorizontal className="driepuntenplay"/>
            </div>

            <div className="minicontentstroke">
                <button className="minicirkelreeplay"><img src={avatar} className="vogelbutton-play1" />
                </button>

                <div className="containerinclbutton">
                <div className="extradivreplay">
                <p className="mininamereelplay">{username}</p>
                <p className="minimusicreelplay">
                    <IoMusicalNotesSharp className="musiciconplay" /> {music}</p>
                    </div>
                    <button className="volgplaybutton">Volgen</button>
                </div>
            </div>
            
             <div className="lastcontainerreel">
                <div>
                    <p className="contentnamereplay">{description}</p>
                    </div>
                    <div className="">
                      <button className="playbuttonvogel"><img src={avatar} className="vogelbutton-play"/>
                      </button>
                      </div>
                    </div>
      </div>

      <div className="minicontentstroke">
        <img src={avatar}/> {/*"./pics/vogel-unsplash.jpg"*/} {/*"./pics/vogel-unsplash.jpg" 
        <p>{username}</p> natalieJosephinex
        <p>{music}</p> {/*Kanye West - Flashing Lights
        <p>{description}</p>  vacation in Bali #indo 🗺️ 🗺️
        <p>{likes}</p>
        <p>{comments}</p> "./videos/ai-reel8.mp4" 
      </div>
    </div>
  );
}*/}
    
















        {/*<div className="play-page">


            <div className="reelContainer-play">
            <Reel src="./videos/ai-reel8.mp4" type="video/mp4" className="reel-play" />
            <div className="like-buttons-play">
                <div className="play-button-icons">
                <IoMdHeartEmpty /> <FaRegComment /> <HiMiniArrowPathRoundedSquare /> <CiLocationArrow1 />
                <HiDotsHorizontal className="driepuntenplay"/>
              
            </div>
            <div className="minicontentstroke">
                <button className="minicirkelreeplay"><img src="./pics/vogel-unsplash.jpg" className="vogelbutton-play1"/></button>
                <div className="containerinclbutton">
                <div className="extradivreplay">
                <p className="mininamereelplay">natalieJosephinex</p>
                <p className="minimusicreelplay">
                    <IoMusicalNotesSharp className="musiciconplay"/> Kanye West - Flashing Lights</p>
                    </div>
                    <button className="volgplaybutton">Volgen</button>
                </div>
            </div>
             <div className="lastcontainerreel">
                <div>
                    <p className="contentnamereplay"> vacation in Bali #indo 🗺️ 🗺️</p>
                    </div>
                    <div className="">
                      <button className="playbuttonvogel"><img src="./pics/vogel-unsplash.jpg" className="vogelbutton-play"/></button>
                      </div>
                    </div>
            </div>
            </div>


            <div className="reelContainer-play">
            <Reel src="./videos/ai-reel11.mp4" type="video/mp4" className="reel-play" />
           <div className="like-buttons-play">
                <div className="play-button-icons">
                <IoMdHeartEmpty /> <FaRegComment /> <HiMiniArrowPathRoundedSquare /> <CiLocationArrow1 />
                <HiDotsHorizontal className="driepuntenplay"/>
              
            </div>
            <div className="minicontentstroke">
                <button className="minicirkelreeplay"><img src="./pics/vogel-unsplash.jpg" className="vogelbutton-play1"/></button>
                <div className="containerinclbutton">
                <div className="extradivreplay">
                <p className="mininamereelplay">natalieJosephinex</p>
                <p className="minimusicreelplay">
                    <IoMusicalNotesSharp className="musiciconplay"/> Kanye West - Flashing Lights</p>
                    </div>
                    <button className="volgplaybutton">Volgen</button>
                </div>
            </div>
             <div className="lastcontainerreel">
                <div>
                    <p className="contentnamereplay"> AI reels #fietsen#AInature </p>
                    </div>
                    <div className="">
                      <button className="playbuttonvogel"><img src="./pics/vogel-unsplash.jpg" className="vogelbutton-play"/></button>
                      </div>
                    </div>
            </div>
            </div>
            

            <div className="reelContainer-play">
            <Reel src="./videos/ai-reel9.mp4" className="reel-play" type="video/mp4" />
            <div className="like-buttons-play">
                <div className="play-button-icons">
                <IoMdHeartEmpty /> <FaRegComment /> <HiMiniArrowPathRoundedSquare /> <CiLocationArrow1 />
                <HiDotsHorizontal className="driepuntenplay"/>
              
            </div>
            <div className="minicontentstroke">
                <button className="minicirkelreeplay"><img src="./pics/vogel-unsplash.jpg" className="vogelbutton-play1"/></button>
                <div className="containerinclbutton">
                <div className="extradivreplay">
                <p className="mininamereelplay">natalieJosephinex</p>
                <p className="minimusicreelplay">
                    <IoMusicalNotesSharp className="musiciconplay"/> Kanye West - Flashing Lights</p>
                    </div>
                    <button className="volgplaybutton">Volgen</button>
                </div>
            </div>
             <div className="lastcontainerreel">
                <div>
                    <p className="contentnamereplay"> AI videos #avatarworld 🛶</p>
                    </div>
                    <div className="">
                      <button className="playbuttonvogel"><img src="./pics/vogel-unsplash.jpg" className="vogelbutton-play"/></button>
                      </div>
                    </div>
            </div>
            </div>



            <div className="reelContainer-play">
            <Reel src="./videos/ai-reel7.mp4" type="video/mp4" className="reel-play" />
             <div className="like-buttons-play">
                <div className="play-button-icons">
                <IoMdHeartEmpty /> <FaRegComment /> <HiMiniArrowPathRoundedSquare /> <CiLocationArrow1 />
                <HiDotsHorizontal className="driepuntenplay"/>
              
            </div>
            <div className="minicontentstroke">
                <button className="minicirkelreeplay"><img src="./pics/vogel-unsplash.jpg" className="vogelbutton-play1"/></button>
                <div className="containerinclbutton">
                <div className="extradivreplay">
                <p className="mininamereelplay">natalieJosephinex</p>
                <p className="minimusicreelplay">
                    <IoMusicalNotesSharp className="musiciconplay"/> Kanye West - Flashing Lights</p>
                    </div>
                    <button className="volgplaybutton">Volgen</button>
                </div>
            </div>
             <div className="lastcontainerreel">
                <div>
                 <p className="contentnamereplay"> AI videos #appletree#AI!people#eating#n </p>
                    </div>
                    <div className="">
                      <button className="playbuttonvogel"><img src="./pics/vogel-unsplash.jpg" className="vogelbutton-play"/></button>
                      </div>
                    </div>
            </div>
            </div>


            <div className="reelContainer-play">
            <Reel src="./videos/ai-reel11.mp4" type="video/mp4" className="reel-play" />
            <div className="like-buttons-play">
                <div className="play-button-icons">
                <IoMdHeartEmpty /> <FaRegComment /> <HiMiniArrowPathRoundedSquare /> <CiLocationArrow1 />
                <HiDotsHorizontal className="driepuntenplay"/>
              
            </div>
            <div className="minicontentstroke">
                <button className="minicirkelreeplay"><img src="./pics/vogel-unsplash.jpg" className="vogelbutton-play1"/></button>
                <div className="containerinclbutton">
                <div className="extradivreplay">
                <p className="mininamereelplay">natalieJosephinex</p>
                <p className="minimusicreelplay">
                    <IoMusicalNotesSharp className="musiciconplay"/> Kanye West - Flashing Lights</p>
                    </div>
                    <button className="volgplaybutton">Volgen</button>
                </div>
            </div>
             <div className="lastcontainerreel">
                <div>
                    <p className="contentnamereplay">  #VacationIn#Asia 🗺️ 🗺️</p>
                    </div>
                    <div className="">
                      <button className="playbuttonvogel"><img src="./pics/vogel-unsplash.jpg" className="vogelbutton-play"/></button>
                      </div>
                    </div>
            </div>
            </div>


            <div className="reelContainer-play">
            <Reel src="./videos/ai-reel10.mp4" type="video/mp4" className="reel-play" />
             <div className="like-buttons-play">
                <div className="play-button-icons">
                <IoMdHeartEmpty /> <FaRegComment /> <HiMiniArrowPathRoundedSquare /> <CiLocationArrow1 />
                <HiDotsHorizontal className="driepuntenplay"/>
              
            </div>
            <div className="minicontentstroke">
                <button className="minicirkelreeplay"><img src="./pics/vogel-unsplash.jpg" className="vogelbutton-play1"/></button>
                <div className="containerinclbutton">
                <div className="extradivreplay">
                <p className="mininamereelplay">natalieJosephinex</p>
                <p className="minimusicreelplay">
                    <IoMusicalNotesSharp className="musiciconplay"/> Kanye West - Flashing Lights</p>
                    </div>
                    <button className="volgplaybutton">Volgen</button>
                </div>
            </div>
             <div className="lastcontainerreel">
                <div>
                    <p className="contentnamereplay"> AI videos #avatarworld 🛶</p>
                    </div>
                    <div className="">
                      <button className="playbuttonvogel"><img src="./pics/vogel-unsplash.jpg" className="vogelbutton-play"/></button>
                      </div>
                    </div>
            </div>
            </div>


            <div className="reelContainer-play">
            <Reel src="./videos/ai-reel11.mp4" type="video/mp4" className="reel-play" />
            <div className="like-buttons-play">
                <div className="play-button-icons">
                <IoMdHeartEmpty /> <FaRegComment /> <HiMiniArrowPathRoundedSquare /> <CiLocationArrow1 />
                <HiDotsHorizontal className="driepuntenplay"/>
              
            </div>
            <div className="minicontentstroke">
                <button className="minicirkelreeplay"><img src="./pics/vogel-unsplash.jpg" className="vogelbutton-play1"/></button>
                <div className="containerinclbutton">
                <div className="extradivreplay">
                <p className="mininamereelplay">natalieJosephinex</p>
                <p className="minimusicreelplay">
                    <IoMusicalNotesSharp className="musiciconplay"/> Kanye West - Flashing Lights</p>
                    </div>
                    <button className="volgplaybutton">Volgen</button>
                </div>
            </div>
             <div className="lastcontainerreel">
                <div>
                    <p className="contentnamereplay">  #VacationIn#Asia 🗺️ 🗺️</p>
                    </div>
                    <div className="">
                      <button className="playbuttonvogel"><img src="./pics/vogel-unsplash.jpg" className="vogelbutton-play"/></button>
                      </div>
                    </div>
            </div>
            </div>

   


            <div className="reelContainer-play">
            <Reel src="./videos/ai-reel7.mp4" type="video/mp4" className="reel-play" />
            <div className="like-buttons-play">
                <div className="play-button-icons">
                <IoMdHeartEmpty /> <FaRegComment /> <HiMiniArrowPathRoundedSquare /> <CiLocationArrow1 />
                <HiDotsHorizontal className="driepuntenplay"/>
              
            </div>
            <div className="minicontentstroke">
                <button className="minicirkelreeplay"><img src="./pics/vogel-unsplash.jpg" className="vogelbutton-play1"/></button>
                <div className="containerinclbutton">
                <div className="extradivreplay">
                <p className="mininamereelplay">natalieJosephinex</p>
                <p className="minimusicreelplay">
                    <IoMusicalNotesSharp className="musiciconplay"/> Kanye West - Flashing Lights</p>
                    </div>
                    <button className="volgplaybutton">Volgen</button>
                </div>
            </div>
             <div className="lastcontainerreel">
                <div>
                    <p className="contentnamereplay"> AI videos #avatarworld 🛶</p>
                    </div>
                    <div className="">
                      <button className="playbuttonvogel"><img src="./pics/vogel-unsplash.jpg" className="vogelbutton-play"/></button>
                      </div>
                    </div>
            </div>
            </div>







            <div className="reelContainer-play">
            <Reel src="./videos/ai-reel11.mp4" type="video/mp4" className="reel-play" />
             <div className="like-buttons-play">
                <div className="play-button-icons">
                <IoMdHeartEmpty /> <FaRegComment /> <HiMiniArrowPathRoundedSquare /> <CiLocationArrow1 />
                <HiDotsHorizontal className="driepuntenplay"/>
              
            </div>
            <div className="minicontentstroke">
                <button className="minicirkelreeplay"><img src="./pics/vogel-unsplash.jpg" className="vogelbutton-play1"/></button>
                <div className="containerinclbutton">
                <div className="extradivreplay">
                <p className="mininamereelplay">natalieJosephinex</p>
                <p className="minimusicreelplay">
                    <IoMusicalNotesSharp className="musiciconplay"/> Kanye West - Flashing Lights</p>
                    </div>
                    <button className="volgplaybutton">Volgen</button>
                </div>
            </div>
             <div className="lastcontainerreel">
                <div>
                    <p className="contentnamereplay">  #VacationIn#Asia 🗺️ 🗺️</p>
                    </div>
                    <div className="">
                      <button className="playbuttonvogel"><img src="./pics/vogel-unsplash.jpg" className="vogelbutton-play"/></button>
                      </div>
                    </div>
            </div>
            </div>










            <div className="reelContainer-play">
            <Reel src="./videos/ai-reel8.mp4" type="video/mp4" className="reel-play" />
              <div className="like-buttons-play">
                <div className="play-button-icons">
                <IoMdHeartEmpty /> <FaRegComment /> <HiMiniArrowPathRoundedSquare /> <CiLocationArrow1 />
                <HiDotsHorizontal className="driepuntenplay"/>
            </div>

            <div className="minicontentstroke">
                <button className="minicirkelreeplay"><img src="./pics/vogel-unsplash.jpg" className="vogelbutton-play1"/></button>
                <div className="containerinclbutton">
                <div className="extradivreplay">
                <p className="mininamereelplay">natalieJosephinex</p>
                <p className="minimusicreelplay">
                    <IoMusicalNotesSharp className="musiciconplay"/> Kanye West - Flashing Lights</p>
                    </div>
                    <button className="volgplaybutton">Volgen</button>
                </div>
            </div>
             <div className="lastcontainerreel">
                <div>
                    <p className="contentnamereplay"> vacation in Bali #indo 🗺️ 🗺️</p>
                    </div>
                    <div className="">
                      <button className="playbuttonvogel"><img src="./pics/vogel-unsplash.jpg" className="vogelbutton-play"/></button>
                      </div>
                    </div>
            </div>
            </div>


            <div className="reelContainer-play">
            <Reel src="./videos/ai-reel9.mp4" className="reel-play" type="video/mp4" />
          <div className="like-buttons-play">
                <div className="play-button-icons">
                <IoMdHeartEmpty /> <FaRegComment /> <HiMiniArrowPathRoundedSquare /> <CiLocationArrow1 />
                <HiDotsHorizontal className="driepuntenplay"/>
              
            </div>
            <div className="minicontentstroke">
                <button className="minicirkelreeplay"><img src="./pics/vogel-unsplash.jpg" className="vogelbutton-play1"/></button>
                <div className="containerinclbutton">
                <div className="extradivreplay">
                <p className="mininamereelplay">natalieJosephinex</p>
                <p className="minimusicreelplay">
                    <IoMusicalNotesSharp className="musiciconplay"/> Kanye West - Flashing Lights</p>
                    </div>
                    <button className="volgplaybutton">Volgen</button>
                </div>
            </div>
             <div className="lastcontainerreel">
                <div>
                    <p className="contentnamereplay"> AI reels #fietsen#AInature </p>
                    </div>
                    <div className="">
                      <button className="playbuttonvogel"><img src="./pics/vogel-unsplash.jpg" className="vogelbutton-play"/></button>
                      </div>
                    </div>
            </div>
            </div>


            <div className="reelContainer-play">
            <Reel src="./videos/ai-reel7.mp4" type="video/mp4" className="reel-play" />
             <div className="like-buttons-play">
                <div className="play-button-icons">
                <IoMdHeartEmpty /> <FaRegComment /> <HiMiniArrowPathRoundedSquare /> <CiLocationArrow1 />
                <HiDotsHorizontal className="driepuntenplay"/>
              
            </div>
            <div className="minicontentstroke">
                <button className="minicirkelreeplay"><img src="./pics/vogel-unsplash.jpg" className="vogelbutton-play1"/></button>
                <div className="containerinclbutton">
                <div className="extradivreplay">
                <p className="mininamereelplay">natalieJosephinex</p>
                <p className="minimusicreelplay">
                    <IoMusicalNotesSharp className="musiciconplay"/> Kanye West - Flashing Lights</p>
                    </div>
                    <button className="volgplaybutton">Volgen</button>
                </div>
            </div>
             <div className="lastcontainerreel">
                <div>
                    <p className="contentnamereplay"> AI videos #avatarworld 🛶</p>
                    </div>
                    <div className="">
                      <button className="playbuttonvogel"><img src="./pics/vogel-unsplash.jpg" className="vogelbutton-play"/></button>
                      </div>
                    </div>
            </div>
            </div>
        </div>*/}
    