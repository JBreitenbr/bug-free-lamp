import {useEffect, useState} from 'react';
import Pagination from "./Pagination";
import Track from "./Track";
const Encyclopedy = ({tracks}) => {
/*let [letter, setLetter]=useState();
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
        )}</select></div><br/>*/
  
  return (<>
            <Pagination
              data={tracks}
              RenderComponent={Track}
              title="Posts"
              buttonConst={3}
              contentPerPage={10}
              siblingCount={1}
            /></>)
}

export default Encyclopedy;