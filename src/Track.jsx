function Track({ data, kurva }) {
  const { track, album_pic } = data;
  return (
    <div className="ml-4 mb-4"><img src={album_pic} className="h-20 w-20 sm:h-32 sm:w-32" style={{border:"1px solid #0f172a"}} /><div className="text-base sm:text-xl md:text-2xl xl:text-3xl mt-2 text-white">{track}</div></div>)
}

export default Track;