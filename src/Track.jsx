import Tooltip from "./Tooltip";
import AlbumInfo from "./AlbumInfo";
import SongTitles from "./SongTitles";

function Track({ data }) {
  const { artist, track, album_pic,album_tracks,album_name,album_date,genres } = data;
  return (
    <div className="ml-4 mb-4"><Tooltip content=<div style={{backgroundColor:"papayawhip"}}> <AlbumInfo artist={artist} album_pic={album_pic} album_name={album_name} album_date={album_date} genres={genres} /><SongTitles album_tracks={album_tracks}/></div> direction="bottom"><img src={album_pic} className="h-20 w-20 sm:h-32 sm:w-32" style={{border:"1px solid #0f172a"}} /></Tooltip><div className="text-base sm:text-xl md:text-2xl xl:text-3xl mt-2 text-white">{track}</div>    </div>)
}

export default Track;