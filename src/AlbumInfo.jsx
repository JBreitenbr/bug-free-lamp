const AlbumInfo=({artist,album_name,album_pic,album_date,genres})=>{
 
return (
 
  <div className="flex flex-row mx-2 mt-4 justify-center items-center" style={{width:"80vw"}}><img src={album_pic} className="h-32 w-32 sm:h-40 sm:w-40 lg:h-56 lg:w-56 m-2"/>
<div style={{minWidth:"55vw"}}>
   <div className="text-base sm:text-xl mx-2 mt-2">{artist}</div>
<div className="text-base sm:text-xl mx-2">{album_name}</div><div className="text-base sm:text-xl mx-2">{album_date}</div><div className="mx-2 text-xs text-wrap">{genres}</div></div></div>)
}
export default AlbumInfo;