import {useEffect, useState} from 'react';
import Pagination from "./Pagination";
import Track from "./Track";
const Encyclopedy = () => {
let [letter, setLetter]=useState();
  let [bands, setBands]=useState([]);
  let [bandSubs,setBandSubs]=useState([]);
  let [bandName, setBandName]=useState("none");
  let [tracks, setTracks]=useState([]);
useEffect(() =>{
fetch(`https://raw.githubusercontent.com/JBreitenbr/Spotify-Data/refs/heads/main/bandSubs.json`)
      .then((res) => res.json())
      .then((data) => setBandSubs(data))
  },[]);
  function handleLetter(e){
    setLetter(e.target.value)
    setBands(bandSubs.find(item=>item.name===e.target.value).bands)
  }
  function handleBand(e){
    setBandName(e.target.value)
  }

useEffect(() =>{
fetch(`https://raw.githubusercontent.com/JBreitenbr/Spotify-Data/refs/heads/main/Songs/${bandName}.json`)
      .then((res) => res.json())
      .then((data) => setTracks(data))
  },[bandName]);

const bandTracks=
tracks.map(
(item,index) => {
  /*let songs=item.album_tracks.split(")/"); let med=Math.floor(songs.length/2);
  let songs1=songs.slice(0,med+songs.length%2); let songs2=songs.slice(med+songs.length%2);*/
return (
 <><li key={item.track}><div className="ml-4 mb-4"><img src={item.album_pic} className="h-20 w-20 sm:h-32 sm:w-32" style={{border:"1px solid #0f172a"}} /><div className="text-base sm:text-xl md:text-2xl xl:text-3xl mt-2 text-white">{item.track}</div></div></li>    </>)});
  return (
    <div className="generale bg-slate-500" style={{position:"relative"}}>
     <div className="bg-slate-300 flex flex-col" style={{position: "sticky",top:"0px",width:"100vw"}}>
<h3 className="text-white text-center text-3xl h-16 pt-4 mb-6 bg" >My Own Private Spotify</h3>
      <select className="mx-8 sm:mx-32 sm:h-6 sm:text-xl" onChange={handleLetter}>
      <option key={letter}>--Select Letter--</option>
        {bandSubs.map(item=>
          <option key={item.name}>{item.name}</option>
        )}
      </select>
      <select className="mb-6 mx-8 sm:mx-32 sm:h-6 sm:text-xl" onChange={handleBand}>
        <option>--Select Artist--</option>
        {bands.map(item=>
          <option key={item.name}>{item.name}</option>
        )}</select></div><br/>
      {bandName=="none"?<div className="spoti mt-7 sm:mt-36"></div>:<ul className="grid grid-cols-2">{bandTracks}</ul>}    <div>
        {tracks.length > 0 ? (
          <>
            <Pagination
              data={tracks}
              RenderComponent={Track}
              title="Posts"
              buttonConst={3}
              contentPerPage={5}
              siblingCount={1}
            />
          </>
        ) : (
          <h1>No Posts to display</h1>
        )}
      </div>
    </div>
  )
}

export default Encyclopedy;