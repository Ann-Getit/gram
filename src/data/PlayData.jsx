import Playcard from "../pages/Playcard";

const PlayData = () => {
    
const avatar = `${import.meta.env.BASE_URL}pics/vogel-unsplash.jpg`;
const src = `${import.meta.env.BASE_URL}videos/ai-reel8.mp4`;
    const reeldatas = [
  {
    id: 1,
    src: `${import.meta.env.BASE_URL}videos/ai-reel8.mp4`,
    username: "natalieJosephinex",
    music: "Kanye West - Flashing Lights",
    avatar: `${import.meta.env.BASE_URL}pics/vogel-unsplash.jpg`,
    description: "Vacation in Bali #indo 🗺️🗺️",
    /*likes: 1200,
    comments: 84,*/
  },
  {
    id: 2,
    src: `${import.meta.env.BASE_URL}videos/ai-reel9.mp4`,
    username: "johnsmith",
    music: "Drake - Passionfruit",
    avatar: `${import.meta.env.BASE_URL}pics/vogel-unsplash.jpg`,
    description: "Beautiful sunset 🌅",
    /*likes: 850,
    comments: 32,*/
  },
   {
    id: 3,
    src: `${import.meta.env.BASE_URL}videos/ai-reel11.mp4`,
    username: "apocalypto.x",
    music: "olivia Dean - A Couple Minutes",
    avatar: `${import.meta.env.BASE_URL}pics/vogel-unsplash.jpg`,
    description: "Beautiful chinese sunset 🌅 #vacation#asia",
    /*likes: 850,
    comments: 32,*/
  },
   {
    id: 4,
    src: `${import.meta.env.BASE_URL}videos/ai-reel1.mp4`,
    username: ".john-Doex",
    music: "olivia Dean - A Couple Minutes",
    avatar: `${import.meta.env.BASE_URL}pics/vogel-unsplash.jpg`,
    description: "Springset #colorfull#flowers",
    /*likes: 850,
    comments: 32,*/
  },
];

    return(
        <>

         <div className="play-page">
      {reeldatas.map((reeldata) => (
        <Playcard
          key={reeldata.id}
          src={reeldata.src}
          username={reeldata.username}
          music={reeldata.music}
          avatar={reeldata.avatar}
          description={reeldata.description}
        />
      ))}
    </div>

        </>
    );
};
export default PlayData;