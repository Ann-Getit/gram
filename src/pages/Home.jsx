import "./Home.css";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { FaRegComment } from "react-icons/fa6";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import { CiLocationArrow1 } from "react-icons/ci";
import { BiBookmark } from "react-icons/bi";
import { HiDotsHorizontal } from "react-icons/hi";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import Reel from "./Reel"
import { useState } from "react"


const Home = () => {

   /* const [showControl, setShowControl] = useState(false);*/

  

const images = [
  "./pics/mykonos1-unsplash.jpg",
  "./pics/mykonos2-unsplash.jpg",
  "./pics/mykonos3-unsplash.jpg"
];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e) => {
  const index = Math.round(
    e.target.scrollLeft / e.target.clientWidth
  );
  setActiveIndex(index);
};


    return (


        <>
        <div className="home-page">
        <div className="verhaalreeks">
            <div className="verhaalboxjes">
            <button className="verhaalvoegen">
                <IoPersonCircleSharp className="person-icon-verhaal"/>
                <span className="pluspuntje-home">+</span>
            </button>
            <span className="names-home">Je verhaal</span>
            </div>

            <div className="verhaalboxjes">
            <button className="verhaalvoegen">
                <img src="./pics/vogel-unsplash.jpg" className="vogel-pics"/>
            </button>
             <span className="names-home">John doex</span>
           </div>

            <div className="verhaalboxjes">
            <button className="verhaalvoegen">
                <img src="./pics/vogel-unsplash.jpg" className="vogel-pics"/>
            </button>
             <span className="names-home">John doe</span>
           </div>

            <div className="verhaalboxjes">
            <button className="verhaalvoegen">
                <img src="./pics/vogel-unsplash.jpg" className="vogel-pics"/>
            </button>
             <span className="names-home">John doe</span>
           </div>

            <div className="verhaalboxjes" >
            <button className="verhaalvoegen">
                <img src="./pics/vogel-unsplash.jpg" className="vogel-pics"/>
            </button>
             <span className="names-home">John doe</span>
           </div>

           <div className="verhaalboxjes">
            <button className="verhaalvoegen">
                <img src="./pics/vogel-unsplash.jpg" className="vogel-pics"/>
            </button>
             <span className="names-home">John doe</span>
           </div>

            <div className="verhaalboxjes">
            <button className="verhaalvoegen">
                <img src="./pics/vogel-unsplash.jpg" className="vogel-pics"/>
            </button>
             <span className="names-home">John doe</span>
           </div>

            <div className="verhaalboxjes">
            <button className="verhaalvoegen">
                <img src="./pics/vogel-unsplash.jpg" className="vogel-pics"/>
            </button>
             <span className="names-home">John doe</span>
           </div>

           <div className="verhaalboxjes">
            <button className="verhaalvoegen">
                <img src="./pics/vogel-unsplash.jpg" className="vogel-pics"/>
            </button>
             <span className="names-home">John doe</span>
           </div>

            <div className="verhaalboxjes">
            <button className="verhaalvoegen">
                <img src="./pics/vogel-unsplash.jpg" className="vogel-pics"/>
            </button>
             <span className="names-home">John doe</span>
           </div>

            <div className="verhaalboxjes">
            <button className="verhaalvoegen">
                <img src="./pics/vogel-unsplash.jpg" className="vogel-pics"/>
            </button>
             <span className="names-home">John doe</span>
           </div>

           <div className="verhaalboxjes">
            <button className="verhaalvoegen">
                <img src="./pics/vogel-unsplash.jpg" className="vogel-pics"/>
            </button>
             <span className="names-home">John doe</span>
           </div>

            <div className="verhaalboxjes">
            <button className="verhaalvoegen">
                <img src="./pics/vogel-unsplash.jpg" className="vogel-pics"/>
            </button>
             <span className="names-home">John doe</span>
           </div>

            <div className="verhaalboxjes">
            <button className="verhaalvoegen">
                <img src="./pics/vogel-unsplash.jpg" className="vogel-pics"/>
            </button>
             <span className="names-home">John doexx</span>
           </div>

        </div>


        
        <div className="allContents">
    <div>
        <div className="topstrokecontent">
            <div className="profilecirkel">
                <img src="pics/vogel-unsplash.jpg" className="mini-profilepic-content"/>
            </div>

            <div className="mini-profiilename-content">
              <div className="profilenam-main">
            <p>profilename</p>
              </div>
              <div className="tripleperiods" >
                <HiDotsHorizontal />
             </div>
           </div>
        </div>



  <Reel src="./videos/ai-reel1.mp4" className="reel-reel-home" type="video/mp4" />


<div className="like-comment">
    <div className="first-icons">
    <IoMdHeartEmpty /> <FaRegComment /> <HiMiniArrowPathRoundedSquare /> <CiLocationArrow1 /> 
</div>
<div className="bookmark-icon">
    <BiBookmark />
    </div>
</div>
<div className="bijschrift">
    <p><span className="boldtekst">zoeyonly_1page</span > en <span className="boldtekst">anderen</span> vinden dit leuk</p>

    <p className="extrasfromuser"><span className="boldtekst">johndoe</span > ai reels 3 #content#insta#2</p>

    <p className="timeago">40 minuten geleden</p>
</div>
</div>
{/* ------ als nog niet goed is check picscontents geef van dogs fotos andere class-------*/}

<div>
     <div className="topstrokecontent">
            <div className="profilecirkel">
                <img src="pics/vogel-unsplash.jpg" className="mini-profilepic-content"/>
            </div>

            <div className="mini-profiilename-content">
              <div className="profilenam-main">
            <p>profilename</p>
              </div>
              <div className="tripleperiods" >
                <HiDotsHorizontal />
             </div>
           </div>
        </div>
            <img src="./pics/dogs-unsplash.jpg" className="dogscontents" />
  
<div className="like-comment">
    <div className="first-icons">
    <IoMdHeartEmpty /> <FaRegComment /> <HiMiniArrowPathRoundedSquare /> <CiLocationArrow1 /> 
</div>
<div className="bookmark-icon">
    <BiBookmark />
    </div>
</div>
<div className="bijschrift">
    <p><span className="boldtekst">zoeyonly_1page</span > en <span className="boldtekst">anderen</span> vinden dit leuk</p>

    <p className="extrasfromuser"><span className="boldtekst">johndoe</span > ai reels 3 #content#insta#2</p>

    <p className="timeago">40 minuten geleden</p>
</div>
</div>



<div>
     <div className="topstrokecontent">
            <div className="profilecirkel">
                <img src="pics/vogel-unsplash.jpg" className="mini-profilepic-content"/>
            </div>

            <div className="mini-profiilename-content">
              <div className="profilenam-main">
            <p>profilename</p>
              </div>
              <div className="tripleperiods" >
                <HiDotsHorizontal />
             </div>
           </div>
        </div>
        <div className="slide-contents" onScroll={handleScroll}>
             {images.map((img, index) => (
    <img
      key={index}
      src={img}
      className="picscontents"
    />
  ))}
     
  </div>
  <div className="slidedots">

    {images.map((_, index) => (
    <div
      key={index}

      className={`dot ${activeIndex === index ? "active" : ""}`}
    />
  ))}
  </div>
<div className="like-comment">
    <div className="first-icons">
    <IoMdHeartEmpty /> <FaRegComment /> <HiMiniArrowPathRoundedSquare /> <CiLocationArrow1 /> 
</div>
<div className="bookmark-icon">
    <BiBookmark />
    </div>
</div>
<div className="bijschrift">
    <p><span className="boldtekst">zoeyonly_1page</span > en <span className="boldtekst">anderen</span> vinden dit leuk</p>

    <p className="extrasfromuser"><span className="boldtekst">johndoe</span > ai reels 3 #content#insta#2</p>

    <p className="timeago">40 minuten geleden</p>
</div>
</div>




<div>
     <div className="topstrokecontent">
            <div className="profilecirkel">
                <img src="pics/vogel-unsplash.jpg" className="mini-profilepic-content"/>
            </div>

            <div className="mini-profiilename-content">
              <div className="profilenam-main">
            <p>profilename</p>
              </div>
              <div className="tripleperiods" >
                <HiDotsHorizontal />
             </div>
           </div>
        </div>

  <Reel src="./videos/ai-reel9.mp4" type="video/mp4" />
    
<div className="like-comment">
    <div className="first-icons">
    <IoMdHeartEmpty /> <FaRegComment /> <HiMiniArrowPathRoundedSquare /> <CiLocationArrow1 /> 
</div>
<div className="bookmark-icon">
    <BiBookmark />
    </div>
</div>
<div className="bijschrift">
    <p><span className="boldtekst">zoeyonly_1page</span > en <span className="boldtekst">anderen</span> vinden dit leuk</p>

    <p className="extrasfromuser"><span className="boldtekst">johndoe</span > ai reels 3 #content#insta#2</p>

    <p className="timeago">40 minuten geleden</p>
</div>
</div>

<div>
     <div className="topstrokecontent">
            <div className="profilecirkel">
                <img src="pics/vogel-unsplash.jpg" className="mini-profilepic-content"/>
            </div>

            <div className="mini-profiilename-content">
              <div className="profilenam-main">
            <p>profilename</p>
              </div>
              <div className="tripleperiods" >
                <HiDotsHorizontal />
             </div>
           </div>
        </div>
  <Reel src="./videos/ai-reel3.mp4" type="video/mp4" />

<div className="like-comment">
    <div className="first-icons">
    <IoMdHeartEmpty /> <FaRegComment /> <HiMiniArrowPathRoundedSquare /> <CiLocationArrow1 /> 
</div>
<div className="bookmark-icon">
    <BiBookmark />
    </div>
</div>
<div className="bijschrift">
    <p><span className="boldtekst">zoeyonly_1page</span > en <span className="boldtekst">anderen</span> vinden dit leuk</p>

    <p className="extrasfromuser"><span className="boldtekst">johndoe</span > ai reels 3 #content#insta#2</p>

    <p className="timeago">40 minuten geleden</p>
</div>
</div>


<div>
     <div className="topstrokecontent">
            <div className="profilecirkel">
                <img src="pics/vogel-unsplash.jpg" className="mini-profilepic-content"/>
            </div>

            <div className="mini-profiilename-content">
              <div className="profilenam-main">
            <p>profilename</p>
              </div>
              <div className="tripleperiods" >
                <HiDotsHorizontal />
             </div>
           </div>
        </div>

  <Reel src="./videos/ai-reel4.mp4" type="video/mp4" />

<div className="like-comment">
    <div className="first-icons">
    <IoMdHeartEmpty /> <FaRegComment /> <HiMiniArrowPathRoundedSquare /> <CiLocationArrow1 /> 
</div>
<div className="bookmark-icon">
    <BiBookmark />
    </div>
</div>
<div className="bijschrift">
    <p><span className="boldtekst">zoeyonly_1page</span > en <span className="boldtekst">anderen</span> vinden dit leuk</p>

    <p className="extrasfromuser"><span className="boldtekst">johndoe</span > ai reels 3 #content#insta#2</p>

    <p className="timeago">40 minuten geleden</p>
</div>
</div>

<div>
     <div className="topstrokecontent">
            <div className="profilecirkel">
                <img src="pics/vogel-unsplash.jpg" className="mini-profilepic-content"/>
            </div>

            <div className="mini-profiilename-content">
              <div className="profilenam-main">
            <p>profilename</p>
              </div>
              <div className="tripleperiods" >
                <HiDotsHorizontal />
             </div>
           </div>
        </div>

  <Reel src="./videos/ai-reel8.mp4" type="video/mp4" />

<div className="like-comment">
    <div className="first-icons">
    <IoMdHeartEmpty /> <FaRegComment /> <HiMiniArrowPathRoundedSquare /> <CiLocationArrow1 /> 
</div>
<div className="bookmark-icon">
    <BiBookmark />
    </div>
</div>
<div className="bijschrift">
    <p><span className="boldtekst">zoeyonly_1page</span > en <span className="boldtekst">anderen</span> vinden dit leuk</p>

    <p className="extrasfromuser"><span className="boldtekst">johndoe</span > ai reels 3 #content#insta#2</p>

    <p className="timeago">40 minuten geleden</p>
</div>
</div>


<div>
     <div className="topstrokecontent">
            <div className="profilecirkel">
                <img src="pics/vogel-unsplash.jpg" className="mini-profilepic-content"/>
            </div>

            <div className="mini-profiilename-content">
              <div className="profilenam-main">
            <p>profilename</p>
              </div>
              <div className="tripleperiods" >
                <HiDotsHorizontal />
             </div>
           </div>
        </div>

  <Reel src="./videos/ai-reel6.mp4" type="video/mp4" />

<div className="like-comment">
    <div className="first-icons">
    <IoMdHeartEmpty /> <FaRegComment /> <HiMiniArrowPathRoundedSquare /> <CiLocationArrow1 /> 
</div>
<div className="bookmark-icon">
    <BiBookmark />
    </div>
</div>
<div className="bijschrift">
    <p><span className="boldtekst">zoeyonly_1page</span > en <span className="boldtekst">anderen</span> vinden dit leuk</p>

    <p className="extrasfromuser"><span className="boldtekst">johndoe</span > ai reels 3 #content#insta#2</p>

    <p className="timeago">40 minuten geleden</p>
</div>
</div>

<div>
     <div className="topstrokecontent">
            <div className="profilecirkel">
                <img src="pics/vogel-unsplash.jpg" className="mini-profilepic-content"/>
            </div>

            <div className="mini-profiilename-content">
              <div className="profilenam-main">
            <p>profilename</p>
              </div>
              <div className="tripleperiods" >
                <HiDotsHorizontal />
             </div>
           </div>
        </div>

  <Reel src="./videos/ai-reel7.mp4" type="video/mp4" />

<div className="like-comment">
    <div className="first-icons">
    <IoMdHeartEmpty /> <FaRegComment /> <HiMiniArrowPathRoundedSquare /> <CiLocationArrow1 /> 
</div>
<div className="bookmark-icon">
    <BiBookmark />
    </div>
</div>
<div className="bijschrift">
    <p><span className="boldtekst">zoeyonly_1page</span > en <span className="boldtekst">anderen</span> vinden dit leuk</p>

    <p className="extrasfromuser"><span className="boldtekst">johndoe</span > ai reels 3 #content#insta#2</p>

    <p className="timeago">40 minuten geleden</p>
</div>
</div>


        </div>
        </div>
     {/*} <div className="breedte">
  {window.innerWidth}px
</div>*/}
        </>
    )
}
export default Home;
