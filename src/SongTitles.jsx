const SongTitles=({album_tracks})=>{
let songs=album_tracks.split(")/");
let med=Math.floor(songs.length/2);
  let songs1=songs.slice(0,med+songs.length%2);
 let songs2=songs.slice(med+songs.length%2); 
return (<div className="grid grid-cols-2 px-6 py-4"><div><ol>{songs1.map((track)=><li className="text-wrap text-xs">{track+")"}</li>)}</ol></div><div className="text-wrap flex"><ol className="ml-4" start={med+songs.length%2+1}>{songs2.map((track)=><li className="text-wrap text-xs">{track+")"}</li>)}</ol></div></div>);
}
export default SongTitles;