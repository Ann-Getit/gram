import "./Search.css";
import SearchData from "../data/SearchData";


import {HiDotsHorizontal} from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";

import {IoMdHeartEmpty} from "react-icons/io";
import {FaRegComment} from "react-icons/fa";
import {HiMiniArrowPathRoundedSquare} from "react-icons/hi2";
import {CiLocationArrow1} from "react-icons/ci";

import { useState, useRef } from "react";

const Search = () => {

const inputRef = useRef(null);
const [isFocused, setIsFocused] = useState(false);
const [search, setSearch] = useState("");

const [selectedImage, setSelectedImage] = useState(null);
  
const handleCancel = () => {
  setSearch("");
  setIsFocused(false);
  inputRef.current?.blur();
};
    
    return (
        <>

    <div className="searchcontainer">
        <RiSearchLine className="search-search"/>
    <input type="text"  
    placeholder= "Zoeken" 
    className="inputesearch-search"

    ref={inputRef}
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  onFocus={() => setIsFocused(true)}
    />

    {isFocused ? (
    <button
    onClick={() => handleCancel()}
    className="Annuleren">
        Annuleren</button>
    ) : (
    <HiDotsHorizontal className="searchtripledots"/>
    )}
   </div>

     <div className="content-profile-side">

        {SearchData.map((data) => (
        <div className="own-profile-content" key={data.id}>
            <img src={data.src}
            onClick={() => setSelectedImage(data.src)} />
        </div>
        ))}
       {selectedImage && (
  <div
    className="overlay"
    onClick={() => setSelectedImage(null)}
  >
  <div className="wrappersearch"
    onClick={(e) => e.stopPropagation()}>

    <img src={selectedImage}
    className="large-image"
    onClick={() => setSelectedImage(null)}
    />
    
    <div className="search-button-icons">
              <IoMdHeartEmpty />
              <FaRegComment />
              <HiMiniArrowPathRoundedSquare />
              <CiLocationArrow1 />
              <HiDotsHorizontal className="driepuntenplay" />
            </div>
            
    </div>
  </div>
)}
 
    </div>
 
        </>
    );
};
export default Search;

/*
import reelData from "../data/reelData";


<div className="search-reels">
{
  reelData.map((data) => (
    <div key={data.id} className="search-video-item">
      <video src={data.src} />
    </div>
  ))
}
</div>

*/


        {/*
       <div className="own-profile-content">
        <img src="./pics/sour2-unsplash.jpg" 
        onClick={() => setSelectedImage("./pics/sour2-unsplash.jpg")} />
       </div>
       <div className="own-profile-content">
        <img src="./pics/sour3-unsplash.jpg"
        onClick={() => setSelectedImage("./pics/sour3-unsplash.jpg")} />
       </div>
       <div className="own-profile-content">
        <img src="./pics/sour4-unsplash.jpg" 
         onClick={() => setSelectedImage("./pics/sour4-unsplash.jpg")} />
       </div>
       <div className="own-profile-content">
        <img src="./pics/sour5-unsplash.jpg"
        onClick={() => setSelectedImage("./pics/sour5-unsplash.jpg")}/>
       </div>
       <div className="own-profile-content">
        <img src="./pics/sour6-unsplash.jpg"
        onClick={() => setSelectedImage("./pics/sour6-unsplash.jpg")}/>
       </div>
       <div className="own-profile-content">
        <img src="./pics/sour7-unsplash.jpg"
        onClick={() => setSelectedImage("./pics/sour7-unsplash.jpg")}/>
       </div>
       <div className="own-profile-content">
        <img src="./pics/sour8-unsplash.jpg"
        onClick={() => setSelectedImage("./pics/sour8-unsplash.jpg")}/>
       </div>
       <div className="own-profile-content">
        <img src="./pics/sour9-unsplash.jpg"
        onClick={() => setSelectedImage("./pics/sour9-unsplash.jpg")}/>
       </div>
       <div className="own-profile-content">
        <img src="./pics/sour10-unsplash.jpg"
         onClick={() => setSelectedImage("./pics/sour10-unsplash.jpg")} />
       </div>
       <div className="own-profile-content">
        <img src="./pics/sour11-unsplash.jpg"
          onClick={() => setSelectedImage("./pics/sour11-unsplash.jpg")}/>
       </div>
        <div className="own-profile-content">
            <img src="./pics/sour12-unsplash.jpg"
             onClick={() => setSelectedImage("./pics/sour12-unsplash.jpg")}/>
        </div>
       <div className="own-profile-content">
        <img src="./pics/sour13-unsplash.jpg"
         onClick={() => setSelectedImage("./pics/sour13-unsplash.jpg")}/>
       </div>
       <div className="own-profile-content">
        <img src="./pics/sour14-unsplash.jpg"
         onClick={() => setSelectedImage("./pics/sour14-unsplash.jpg")}/>
       </div>
       <div className="own-profile-content">
        <img src="./pics/sour15-unsplash.jpg"
         onClick={() => setSelectedImage("./pics/sour15-unsplash.jpg")}/>
       </div>
       <div className="own-profile-content">
        <img src="./pics/sour16-unsplash.jpg"
         onClick={() => setSelectedImage("./pics/sour16-unsplash.jpg")}/>
       </div>
       <div className="own-profile-content">
        <img src="./pics/sour17-unsplash.jpg"
         onClick={() => setSelectedImage("./pics/sour17-unsplash.jpg")}/>
       </div>
       <div className="own-profile-content">
        <img src="./pics/sour18-unsplash.jpg"
         onClick={() => setSelectedImage("./pics/sour18-unsplash.jpg")}/>
       </div>
       <div className="own-profile-content">
        <img src="./pics/sour19-unsplash.jpg"
         onClick={() => setSelectedImage("./pics/sour19-unsplash.jpg")}/>
       </div>
       <div className="own-profile-content">
        <img src="./pics/sour20-unsplash.jpg"
         onClick={() => setSelectedImage("./pics/sour20-unsplash.jpg")}/>
       </div>
       <div className="own-profile-content">
        <img src="./pics/sour1-unsplash.jpg"
         onClick={() => setSelectedImage("./pics/sour1-unsplash.jpg")}/>
       </div>
       <div className="own-profile-content">
        <img src="./pics/sour5-unsplash.jpg"
         onClick={() => setSelectedImage("./pics/sour5-unsplash.jpg")}/>
       </div>*/}