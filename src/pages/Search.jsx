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
            loading="eager"
            alt=""
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
